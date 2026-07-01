<?php

namespace App\Models\user;

use Illuminate\Database\Eloquent\Model;

class WavestoreOrder extends Model
{
    protected $table = 'wavestore_orders';
    public $timestamps = false;

    protected $fillable = [
        'id_user',
        'mp_payment_id',
        'mp_status',
        'total',
    ];

    public function user()
    {
        return $this->belongsTo(WavestoreUser::class, 'id_user');
    }

    public function items()
    {
        return $this->hasMany(WavestoreOrderItem::class, 'id_order');
    }
}
