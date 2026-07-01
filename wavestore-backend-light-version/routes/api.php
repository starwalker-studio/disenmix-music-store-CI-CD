<?php

use App\Http\Controllers\products\WavestoreCategoryController;
use App\Http\Controllers\products\WavestoreProductController;
use App\Http\Controllers\products\WavestoreProductImagesController;
use App\Http\Controllers\stripe\CheckoutController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('wavestore-product')->group(function () {
    Route::get('/', [WavestoreProductController::class, 'productIndex']);
    Route::get('/price-range', [WavestoreProductController::class, 'getPriceRange']);
    Route::get('/brands-by-category/{categoryId}', [WavestoreProductController::class, 'brandsByCategory']);
    Route::get(
        '/item/{wavestoreProduct}',
        [WavestoreProductController::class, 'showItemID']
    )->where('wavestoreProduct', '[A-Za-z0-9\-]+');
    Route::get('/categories', [WavestoreCategoryController::class, 'categoryIndex']);
    Route::get('/images/{itemID}', [WavestoreProductImagesController::class, 'galleryProductByItemID'])
        ->where('itemID', '[A-Za-z0-9\-]+');
});

Route::prefix('store')->group(function() {
    Route::post('/checkout', [CheckoutController::class, 'createPaymentIntent']);
});
