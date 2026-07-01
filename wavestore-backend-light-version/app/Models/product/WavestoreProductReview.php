<?php

namespace App\Models\product;

use Illuminate\Database\Eloquent\Model;

class WavestoreProductReview extends Model
{
    protected $table = 'wavestore_product_reviews';
    public $timestamps = false;

    protected $fillable = ['item_ID', 'comment', 'rating'];

    public function product()
    {
        return $this->belongsTo(WavestoreProduct::class, 'item_ID', 'item_ID');
    }
}
