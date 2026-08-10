<?php

namespace Database\Seeders\products;

use App\Models\product\WavestoreProduct;
use Illuminate\Database\Seeder;

class AccessoriesSeeder extends Seeder
{
    public function run(): void
    {
        $products = json_decode(file_get_contents(database_path('seeders/data/products/accessories.json')), true);
        foreach ($products as $product) {
            WavestoreProduct::updateOrCreate(
                ['item_ID' => $product['item_ID']],
                $product
            );
        }
    }
}
