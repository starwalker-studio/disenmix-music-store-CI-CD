<?php

namespace Tests\Feature\Product;

use App\Models\product\WavestoreBrand;
use App\Models\product\WavestoreCategory;
use App\Models\product\WavestoreProduct;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class WavestoreProductUpdateTest extends TestCase
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
            'item_ID'      => 'UPD-001',
            'id_brand'     => $this->brand->id,
            'id_category'  => $this->category->id,
            'model'        => 'Original model',
            'in_stock'     => true,
            'description'  => 'Original description',
            'product_info' => 'Original info',
            'price'        => 500.00,
            'img'          => '/img/test.png',
        ]);
    }

    public function test_updates_product_successfully(): void
    {
        $response = $this->postJson('/api/wavestore-product/update-product', [
            'item_ID'      => 'UPD-001',
            'id_brand'     => $this->brand->id,
            'id_category'  => $this->category->id,
            'model'        => 'Updated model',
            'in_stock'     => false,
            'price'        => 999.99,
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'isUpdated' => true,
            ]);

        $this->assertDatabaseHas('wavestore_products', [
            'item_ID' => 'UPD-001',
            'model'   => 'Updated model',
            'price'   => 999.99,
        ]);
    }

    public function test_returns_404_when_updating_nonexistent_product(): void
    {
        $response = $this->postJson('/api/wavestore-product/update-product', [
            'item_ID'      => 'NO-EXISTE',
            'id_brand'     => $this->brand->id,
            'id_category'  => $this->category->id,
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['item_ID']);
    }

    public function test_updates_product_with_image(): void
    {
        Storage::fake('public');

        $response = $this->postJson('/api/wavestore-product/update-product', [
            'item_ID'      => 'UPD-001',
            'id_brand'     => $this->brand->id,
            'id_category'  => $this->category->id,
            'model'        => 'Updated with image',
            'img'          => '/img/items/guitars/test/UPD-001.png',
            'imgPath'      => 'img/items/guitars/test',
            'imgData'      => UploadedFile::fake()->image('UPD-001.png'),
        ]);

        $response->assertStatus(200)
            ->assertJson(['isUpdated' => true]);
    }
}
