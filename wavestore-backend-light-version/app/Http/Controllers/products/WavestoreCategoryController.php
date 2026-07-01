<?php

namespace App\Http\Controllers\products;

use App\Http\Controllers\Controller;
use App\Models\product\WavestoreCategory;
use Illuminate\Http\Request;

class WavestoreCategoryController extends Controller
{
    public function categoryIndex()
    {
        $categories = WavestoreCategory::all();
        return response()->json($categories);
    }
}
