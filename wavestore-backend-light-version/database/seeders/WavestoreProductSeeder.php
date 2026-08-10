<?php

namespace Database\Seeders;

use App\Models\product\WavestoreProduct;
use Database\Seeders\products\AccessoriesSeeder;
use Database\Seeders\products\BassSeeder;
use Database\Seeders\products\DrumsSeeder;
use Database\Seeders\products\GuitarSeeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WavestoreProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->call([
            GuitarSeeder::class,
            BassSeeder::class,
            DrumsSeeder::class,
            AccessoriesSeeder::class
        ]);
    }
}
