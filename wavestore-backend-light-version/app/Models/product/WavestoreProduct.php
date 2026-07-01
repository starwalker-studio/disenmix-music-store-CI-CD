<?php

namespace App\Models\product;

use Illuminate\Database\Eloquent\Model;

class WavestoreProduct extends Model
{
    protected $table = 'wavestore_products';

    protected $fillable = [
        'item_ID',
        'id_brand',
        'id_category',
        'model',
        'in_stock',
        'description',
        'product_info',
        'price',
        'img',
    ];

    public function getRouteKeyName(): string
    {
        return 'item_ID';
    }

    public function brand()
    {
        return $this->belongsTo(WavestoreBrand::class, 'id_brand');
    }

    public function category()
    {
        return $this->belongsTo(WavestoreCategory::class, 'id_category');
    }
}
