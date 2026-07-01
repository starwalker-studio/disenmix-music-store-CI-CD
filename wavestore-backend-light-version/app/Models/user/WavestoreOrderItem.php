<?php

namespace App\Models\user;

use App\Models\product\WavestoreProduct;
use Illuminate\Database\Eloquent\Model;

class WavestoreOrderItem extends Model
{
    protected $table = 'wavestore_order_items';
    public $timestamps = false;

    protected $fillable = [
        'id_order',
        'item_ID',
        'quantity',
        'unit_price',
    ];

    public function order()
    {
        return $this->belongsTo(WavestoreOrder::class, 'id_order');
    }

    public function product()
    {
        return $this->belongsTo(WavestoreProduct::class, 'item_ID', 'item_ID');
    }
}
