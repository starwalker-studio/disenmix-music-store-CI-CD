<?php

namespace App\Http\Controllers\products;

use App\Http\Controllers\Controller;
use App\Models\product\WavestoreProductImage;
use Illuminate\Http\Request;

class WavestoreProductImagesController extends Controller
{
    public function galleryProductByItemID($itemID)
    {
        $images = WavestoreProductImage::where('item_ID', $itemID)
            ->orderBy('sort_order', 'asc')
            ->get();

        return response()->json($images);
    }
}
