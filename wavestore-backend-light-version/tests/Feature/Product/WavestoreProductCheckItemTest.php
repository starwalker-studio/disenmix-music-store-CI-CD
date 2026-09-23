<?php

namespace Tests\Feature\Product;

use App\Models\product\WavestoreBrand;
use App\Models\product\WavestoreCategory;
use App\Models\product\WavestoreProduct;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class WavestoreProductCheckItemTest extends TestCase
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

    public function test_reports_item_id_as_available_when_not_exists(): void
    {
        $response = $this->getJson('/api/wavestore-product/check-item-id/NUEVO-001');

        $response->assertStatus(200)
            ->assertJson(['available' => true]);
    }

    public function test_reports_item_id_as_unavailable_when_exists(): void
    {
        WavestoreProduct::create([
            'item_ID'      => 'EXIST-001',
            'id_brand'     => $this->brand->id,
            'id_category'  => $this->category->id,
            'model'        => 'Existing product',
            'in_stock'     => true,
            'description'  => 'desc',
            'product_info' => 'info',
            'price'        => 500.00,
            'img'          => '/img/test.png',
        ]);

        $response = $this->getJson('/api/wavestore-product/check-item-id/EXIST-001');

        $response->assertStatus(200)
            ->assertJson(['available' => false]);
    }

    public function test_reports_item_id_as_available_after_soft_delete(): void
    {
        $product = WavestoreProduct::create([
            'item_ID'      => 'DELETED-001',
            'id_brand'     => $this->brand->id,
            'id_category'  => $this->category->id,
            'model'        => 'Deleted product',
            'in_stock'     => true,
            'description'  => 'desc',
            'product_info' => 'info',
            'price'        => 500.00,
            'img'          => '/img/test.png',
        ]);

        $product->delete();

        $response = $this->getJson('/api/wavestore-product/check-item-id/DELETED-001');

        $response->assertStatus(200)
            ->assertJson(['available' => true]);
    }
}
