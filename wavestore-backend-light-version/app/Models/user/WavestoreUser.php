<?php

namespace App\Models\user;

use Illuminate\Database\Eloquent\Model;

class WavestoreUser extends Model
{
    protected $table = 'wavestore_user';

    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'doc_type',
        'doc_number',
        'mp_customer_id',
    ];

    protected $hidden = [
        'password', // nunca exponer en responses
    ];

    public function cart()
    {
        return $this->hasMany(WavestoreCart::class, 'id_user');
    }
}
