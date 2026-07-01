<?php

namespace App\Models\product;

use Illuminate\Database\Eloquent\Model;

class WavestoreProductImage extends Model
{
    protected $table = 'wavestore_product_images';
    public $timestamps = false;

    protected $fillable = ['item_ID', 'url', 'sort_order'];

    public function getRouteKeyName(): string
    {
        return 'item_ID';
    }

    public function product()
    {
        return $this->belongsTo(WavestoreProduct::class, 'item_ID', 'item_ID');
    }
}
