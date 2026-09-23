<?php

namespace Tests\Feature\Product;

use App\Models\product\WavestoreBrand;
use App\Models\product\WavestoreCategory;
use App\Models\product\WavestoreProduct;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class WavestoreProductDeleteTest extends TestCase
{
    use RefreshDatabase;

    private WavestoreBrand $brand;
    private WavestoreCategory $category;
    private WavestoreProduct $product;

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

        $this->product = WavestoreProduct::create([
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
    }

    public function test_soft_deletes_product(): void
    {
        $response = $this->deleteJson('/api/wavestore-product/delete/DEL-001');

        $response->assertStatus(200)
            ->assertJson([
                'isDeleted' => true,
            ]);

        $this->assertSoftDeleted('wavestore_products', [
            'item_ID' => 'DEL-001',
        ]);
    }

    public function test_deleted_product_not_visible_in_listing(): void
    {
        $this->deleteJson('/api/wavestore-product/delete/DEL-001');

        $response = $this->getJson('/api/wavestore-product');

        $itemIds = collect($response->json('data'))->pluck('item_ID');
        $this->assertNotContains('DEL-001', $itemIds);
    }

    public function test_returns_404_when_deleting_nonexistent_product(): void
    {
        $response = $this->deleteJson('/api/wavestore-product/delete/NO-EXISTE');

        $response->assertStatus(404);
    }
}
