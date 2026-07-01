<?php

namespace Database\Seeders;

use App\Models\product\WavestoreBrand;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WavestoreBrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $brands = [
            ['brand' => 'Fender'],
            ['brand' => 'Fodera'],
            ['brand' => 'Ibanez'],
            ['brand' => 'Sadowsky'],
            ['brand' => 'Warwick'],
            ['brand' => 'Yamaha'],
            ['brand' => 'DW'],
            ['brand' => 'Mapex'],
            ['brand' => 'Pearl'],
            ['brand' => 'Sonor'],
            ['brand' => 'Tama'],
            ['brand' => 'Epiphone'],
            ['brand' => 'Gibson'],
            ['brand' => 'Jackson'],
            ['brand' => 'Boss'],
            ['brand' => 'Hercules'],
            ['brand' => "D'Addario"],
            ['brand' => "Rode"],
            ['brand' => "Peterson"],
        ];

        foreach ($brands as $brand) {
            WavestoreBrand::create($brand);
        }
    }
}
