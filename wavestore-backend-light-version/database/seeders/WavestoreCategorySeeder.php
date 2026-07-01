<?php

namespace Database\Seeders;

use App\Models\product\WavestoreCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WavestoreCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Guitars',     'slug' => 'guitars',     'img' => '/img/categories/ENCTEBGH.webp'],
            ['name' => 'Bass',      'slug' => 'basses',      'img' => '/img/categories/PBassAPR3SB.webp'],
            ['name' => 'Drums & Percussion',       'slug' => 'drums',       'img' => '/img/categories/LM402.webp'],
            ['name' => 'Cables, Cases & More', 'slug' => 'accessories', 'img' => '/img/categories/M4WP006.webp'],
        ];

        foreach ($categories as $category) {
            WavestoreCategory::create($category);
        }
    }
}
