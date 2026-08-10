<?php

namespace Database\Seeders\gallery;

use App\Models\product\WavestoreProductImage;
use Illuminate\Database\Seeder;

class AccesoriesGallerySeeder extends Seeder
{
    public function run(): void
    {
        $products = json_decode(file_get_contents(database_path('seeders/data/gallery/accessories-gallery.json')), true);
        foreach ($products as $product) {
            WavestoreProductImage::updateOrCreate(
                $product
            );
        }
    }
}
