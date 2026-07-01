<?php

namespace App\Models\product;

use Illuminate\Database\Eloquent\Model;

class WavestoreBrand extends Model
{
    protected $table = 'wavestore_brand';
    public $timestamps = false;

    protected $fillable = [
        'brand',
    ];

    public function products()
    {
        return $this->hasMany(WavestoreProduct::class, 'id_brand');
    }
}
