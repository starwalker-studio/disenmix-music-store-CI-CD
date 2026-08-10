<?php

namespace Database\Seeders;

use App\Models\product\WavestoreProductImage;
use Database\Seeders\gallery\AccesoriesGallerySeeder;
use Database\Seeders\gallery\BassGallerySeeder;
use Database\Seeders\gallery\DrumsGallerySeeder;
use Database\Seeders\gallery\GuitarGallerySeeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WavestoreProductImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->call([
            GuitarGallerySeeder::class,
            BassGallerySeeder::class,
            DrumsGallerySeeder::class,
            AccesoriesGallerySeeder::class
        ]);
    }
}
