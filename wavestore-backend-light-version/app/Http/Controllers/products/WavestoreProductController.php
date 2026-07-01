<?php

namespace App\Http\Controllers\products;

use App\Http\Controllers\Controller;
use App\Models\product\WavestoreProduct;
use App\Services\product\ProductService;
use Illuminate\Http\Request;

class WavestoreProductController extends Controller
{
    public function productIndex(Request $request)
    {
        $perPage = (int) $request->input('perPage', 10);

        $query = WavestoreProduct::with('brand')->orderBy('id_brand', 'asc');

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
}
