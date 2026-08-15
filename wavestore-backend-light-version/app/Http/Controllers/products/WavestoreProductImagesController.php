<?php

namespace App\Http\Controllers\products;

use App\Http\Controllers\Controller;
use App\Models\product\WavestoreProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class WavestoreProductImagesController extends Controller
{
    public function galleryProductByItemID($itemID)
    {
        $images = WavestoreProductImage::where('item_ID', $itemID)
            ->orderBy('sort_order', 'asc')
            ->get();

        return response()->json($images);
    }

    public function createGalleryProduct(Request $request)
    {
        $validated = $request->validate([
            'item_ID'        => 'required|string|exists:wavestore_products,item_ID',
            'gallery'        => 'required|array|size:5',
            'gallery.*'      => 'string',
            'galleryData'    => 'required|array|size:5',
            'galleryData.*'  => 'image|max:2048',
            'galleryPath'    => 'required|string',
        ]);
        $diskPath = public_path($validated['galleryPath']);
        if (!File::isDirectory($diskPath)) {
            File::makeDirectory($diskPath, 0755, true);
        }
        $files = $request->file('galleryData');
        $gallery = [];

        foreach ($files as $index => $file) {
            $publicPath = $validated['gallery'][$index];
            $fileName = basename($publicPath);

            $file->move($diskPath, $fileName);

            $gallery[] = [
                'item_ID'    => $validated['item_ID'],
                'url'        => $publicPath,
                'sort_order' => $index,
            ];
        }

        $galleryCreated = WavestoreProductImage::insert($gallery);

        return response()->json([
            'message'   => $galleryCreated ? 'Gallery created successfully!' : 'Not created!',
            'isCreated' => $galleryCreated,
        ], $galleryCreated ? 201 : 500);
    }

    public function updateGalleryProduct(Request $request)
    {
        $validated = $request->validate([
            'item_ID'        => 'required|string|exists:wavestore_products,item_ID',
            'gallery'        => 'nullable|array|size:5',
            'gallery.*'      => 'string',
            'galleryData'    => 'nullable|array|size:5',
            'galleryData.*'  => 'image|max:2048',
            'galleryPath'    => 'nullable|string',
        ]);

        if ($request->hasFile('galleryData')) {
            $diskPath = public_path($validated['galleryPath']);
            if (File::isDirectory($diskPath)) {
                $existingFiles = File::files($diskPath);
                foreach ($existingFiles as $existingFile) {
                    File::delete($existingFile);
                }
            }

            $files = $request->file('galleryData');
            $paths = $validated['gallery'];

            foreach ($files as $index => $file) {
                $fileName = basename($paths[$index]);
                $file->move($diskPath, $fileName);
            }
        }

        return response()->json([
            'message'   => 'Gallery updated successfully!',
            'isUpdated' => true,
        ], 200);
    }
}
