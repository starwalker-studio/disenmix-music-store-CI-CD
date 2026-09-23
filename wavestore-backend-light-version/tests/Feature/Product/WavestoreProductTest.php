<?php

namespace Tests\Feature\Product;

use App\Models\product\WavestoreBrand;
use App\Models\product\WavestoreCategory;
use App\Models\product\WavestoreProduct;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;


class WavestoreProductTest extends TestCase
{
    use RefreshDatabase;

    private WavestoreBrand $brand;
    private WavestoreCategory $category;

    protected function setUp(): void
    {
        parent::setUp();

        $this->brand = WavestoreBrand::create([
            'brand' => 'Test Brand',
        ]);

        $this->category = WavestoreCategory::create([
            'name' => 'Test Category',
            'slug' => 'test-category',
            'img'  => '/img/categories/test.png',
        ]);
    }

    public function test_returns_paginated_list_of_products(): void
    {
        WavestoreProduct::create([
            'item_ID'      => 'TEST-001',
            'id_brand'     => $this->brand->id,
            'id_category'  => $this->category->id,
            'model'        => 'Test Mixer',
            'in_stock'     => true,
            'description'  => 'Test description',
            'product_info' => 'Test info',
            'price'        => 999.99,
            'img'          => '/img/test.png',
        ]);

        $response = $this->getJson('/api/wavestore-product');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'data',
                'total',
                'per_page',
                'current_page',
            ]);
    }

    public function test_does_not_return_soft_deleted_products(): void
    {
        $product = WavestoreProduct::create([
            'item_ID'      => 'DEL-001',
            'id_brand'     => $this->brand->id,
            'id_category'  => $this->category->id,
            'model'        => 'Product to delete',
            'in_stock'     => true,
            'description'  => 'desc',
            'product_info' => 'info',
            'price'        => 300.00,
            'img'          => '/img/test.png',
        ]);

        $product->delete();

        $response = $this->getJson('/api/wavestore-product');

        $response->assertStatus(200);

        $itemIds = collect($response->json('data'))->pluck('item_ID');
        $this->assertNotContains('DEL-001', $itemIds);
        $this->assertSoftDeleted('wavestore_products', [
            'item_ID' => 'DEL-001',
        ]);
    }
}
