<?php

namespace App\Http\Controllers\products;

use App\Http\Controllers\Controller;
use App\Models\product\WavestoreProduct;
use App\Services\product\ProductService;
use BcMath\Number;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class WavestoreProductController extends Controller
{
    public function productIndex(Request $request)
    {
        $perPage = (int) $request->input('perPage', 12);

        $query = WavestoreProduct::with('brand', 'category')->orderBy('id_brand', 'asc');

        $filters = $request->only([
            'id_category',
            'id_brand',
            'in_stock',
            'min_price',
            'max_price',
        ]);

        ProductService::filterQuery($query, $filters);

        $paginator = $query->paginate($perPage);

        return response()->json($paginator);
    }

    public function createProduct(Request $request)
    {
        $validated = $request->validate([
            'item_ID'       =>  'required|string|unique:wavestore_products,item_ID',
            'id_brand'      =>  'required|integer|exists:wavestore_brand,id',
            'id_category'   =>  'required|integer|exists:wavestore_category,id',
            'model'         =>  'required|string|max:255',
            'in_stock'      =>  'required|boolean',
            'description'   =>  'required|string',
            'product_info'  =>  'required|string',
            'price'         =>  'required|numeric',
            'img'           =>  'required|string',
            'imgPath'       =>  'required|string',
            'imgData'       =>  'required|image|max:2048',
        ]);
        $diskPath = public_path($validated['imgPath']);
        if (!File::isDirectory($diskPath)) {
            File::makeDirectory($diskPath, 0755, true);
        }
        $fileName = basename($validated['img']);
        $request->file('imgData')->move($diskPath, $fileName);
        $productData = collect($validated)->except(['imgPath', 'imgData'])->toArray();
        $product = WavestoreProduct::create($productData);
        if ($product) {
            return response()->json([
                'message'   => 'Product created successfully!',
                'data'      => $product,
                'isCreated' => true,
            ], 201);
        }

        return response()->json([
            'message'   => 'Not created!',
            'isCreated' => false,
        ], 500);
    }

    public function updateProduct(Request $request)
    {
        $validated = $request->validate([
            'item_ID'       => 'required|string|exists:wavestore_products,item_ID',
            'id_brand'      => 'required|integer|exists:wavestore_brands,id',
            'id_category'   => 'required|integer|exists:wavestore_categories,id',
            'model'         => 'required|string|max:255',
            'in_stock'      => 'required|boolean',
            'description'   => 'required|string',
            'product_info'  => 'required|string',
            'price'         => 'required|numeric',
            'img'           => 'required|string',
            'imgPath'       => 'required|string',
            'imgData'       => 'nullable|image|max:2048',
        ]);

        $product = WavestoreProduct::where('item_ID', $validated['item_ID'])->firstOrFail();

        if ($request->hasFile('imgData')) {
            $diskPath = public_path($validated['imgPath']);
            $fileName = basename($validated['img']);
            $request->file('imgData')->move($diskPath, $fileName);
        }

        $updateData = collect($validated)->except(['imgPath', 'imgData', 'img'])->toArray();
        $product->update($updateData);

        return response()->json([
            'message'   => "Product {$product->item_ID} updated successfully!",
            'isUpdated' => true,
            'data'      => $product,
        ], 200);
    }

    public function showItemID(WavestoreProduct $wavestoreProduct)
    {
        return response()->json(
            $wavestoreProduct->load('brand')
        );
    }

    public function getPriceRange()
    {
        $min = WavestoreProduct::min('price');
        $max = WavestoreProduct::max('price');

        return response()->json([
            'min_price' => $min,
            'max_price' => $max
        ]);
    }

    public function brandsByCategory($idCategory)
    {
        return response()->json(
            ProductService::distinctCategory($idCategory)
        );
    }

    public function checkItemId(string $item_ID)
    {
        $exists = WavestoreProduct::where('item_ID', $item_ID)->exists();

        return response()->json([
            'available' => !$exists,
        ]);
    }
}
