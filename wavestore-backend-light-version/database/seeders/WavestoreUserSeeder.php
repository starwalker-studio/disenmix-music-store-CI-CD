<?php

namespace Database\Seeders;

use App\Models\user\WavestoreUser;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WavestoreUserSeeder extends Seeder
{
    public function run(): void
    {
        WavestoreUser::create([
            'name'     => 'starwalker',
            'email'    => 'user@wavestore.com',
            'password' => 'altima99',
            'phone'    => '+52 55 1234 8000',
        ]);
    }
}
