<?php

namespace Tests\Feature\Product;

use App\Models\product\WavestoreBrand;
use App\Models\product\WavestoreCategory;
use App\Models\product\WavestoreProduct;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
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

    public function test_creates_product_successfully(): void
    {
        Storage::fake('public');

        $response = $this->postJson('/api/wavestore-product/add-product', [
            'item_ID'      => 'FEND-001',
            'id_brand'     => $this->brand->id,
            'id_category'  => $this->category->id,
            'model'        => 'Fender Stratocaster',
            'in_stock'     => true,
            'description'  => 'Great guitar',
            'product_info' => 'Detailed info',
            'price'        => 849.99,
            'img'          => '/img/items/guitars/fender/FEND-001.png',
            'imgPath'      => 'img/items/guitars/fender',
            'imgData'      => UploadedFile::fake()->image('FEND-001.png'),
        ]);

        $response->assertStatus(201)
            ->assertJson([
                'isCreated' => true,
                'message'   => 'Product created successfully!',
            ]);

        $this->assertDatabaseHas('wavestore_products', [
            'item_ID' => 'FEND-001',
            'price'   => 849.99,
        ]);
    }

    public function test_rejects_duplicate_item_id(): void
    {
        Storage::fake('public');

        WavestoreProduct::create([
            'item_ID'      => 'FEND-001',
            'id_brand'     => $this->brand->id,
            'id_category'  => $this->category->id,
            'model'        => 'Existing product',
            'in_stock'     => true,
            'description'  => 'desc',
            'product_info' => 'info',
            'price'        => 500.00,
            'img'          => '/img/test.png',
        ]);

        $response = $this->postJson('/api/wavestore-product/add-product', [
            'item_ID'      => 'FEND-001',
            'id_brand'     => $this->brand->id,
            'id_category'  => $this->category->id,
            'model'        => 'Duplicate product',
            'in_stock'     => true,
            'description'  => 'desc',
            'product_info' => 'info',
            'price'        => 849.99,
            'img'          => '/img/items/guitars/fender/FEND-001.png',
            'imgPath'      => 'img/items/guitars/fender',
            'imgData'      => UploadedFile::fake()->image('FEND-001.png'),
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['item_ID']);
    }

    public function test_rejects_product_without_required_fields(): void
    {
        $response = $this->postJson('/api/wavestore-product/add-product', []);

        $response->assertStatus(422)
            ->assertJsonValidationErrors([
                'item_ID',
                'id_brand',
                'id_category',
                'model',
                'price',
                'imgData',
            ]);
    }

    public function test_rejects_invalid_price(): void
    {
        $response = $this->postJson('/api/wavestore-product/add-product', [
            'item_ID'      => 'FEND-002',
            'id_brand'     => $this->brand->id,
            'id_category'  => $this->category->id,
            'model'        => 'Test Guitar',
            'in_stock'     => true,
            'description'  => 'desc',
            'product_info' => 'info',
            'price'        => 'not-a-number',
            'img'          => '/img/test.png',
            'imgPath'      => 'img/items/guitars',
            'imgData'      => UploadedFile::fake()->image('test.png'),
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['price']);
    }

    public function test_rejects_nonexistent_brand(): void
    {
        $response = $this->postJson('/api/wavestore-product/add-product', [
            'item_ID'      => 'FEND-003',
            'id_brand'     => 9999,
            'id_category'  => $this->category->id,
            'model'        => 'Test Guitar',
            'in_stock'     => true,
            'description'  => 'desc',
            'product_info' => 'info',
            'price'        => 500.00,
            'img'          => '/img/test.png',
            'imgPath'      => 'img/items/guitars',
            'imgData'      => UploadedFile::fake()->image('test.png'),
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['id_brand']);
    }
}
