<?php

namespace App\Models\user;

use App\Models\product\WavestoreProduct;
use Illuminate\Database\Eloquent\Model;

class WavestoreCart extends Model
{
    protected $table = 'wavestore_cart';
    public $timestamps = false;

    protected $fillable = ['id_user', 'item_ID', 'quantity'];

    public function user()
    {
        return $this->belongsTo(WavestoreUser::class, 'id_user');
    }

    public function product()
    {
        return $this->belongsTo(WavestoreProduct::class, 'item_ID', 'item_ID');
    }
}
