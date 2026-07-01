<?php

namespace App\Models\product;

use Illuminate\Database\Eloquent\Model;

class WavestoreCategory extends Model
{
    protected $table = 'wavestore_category';
    public $timestamps = false;

    protected $fillable = ['name', 'slug', 'img'];

    public function products()
    {
        return $this->hasMany(WavestoreProduct::class, 'id_category');
    }
}
