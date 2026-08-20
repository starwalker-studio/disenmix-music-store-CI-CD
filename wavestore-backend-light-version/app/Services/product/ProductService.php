<?php

namespace App\Services\product;

use App\Models\product\WavestoreBrand;

class ProductService
{
    public static function filterQuery($query, $filters, $searchTerm = null)
    {
        if (isset($filters['id_category'])) {
            $query->where('id_category', $filters['id_category']);
        }

        if (isset($filters['in_stock'])) {
            $query->where('in_stock', $filters['in_stock']);
        }

        if (!empty($filters['id_brand'])) {
            if (is_array($filters['id_brand'])) {
                $query->whereIn('id_brand', $filters['id_brand']);
            } else {
                $query->where('id_brand', $filters['id_brand']);
            }
        }

        if (!empty($filters['min_price'])) {
            $query->where('price', '>=', $filters['min_price']);
        }

        if (!empty($filters['max_price'])) {
            $query->where('price', '<=', $filters['max_price']);
        }

        if (!empty($searchTerm)) {
            $query->where('item_ID', 'LIKE', "%{$searchTerm}%")->get();
        }
    }

    public static function distinctCategory($idCategory)
    {
        return WavestoreBrand::select('wavestore_brand.id', 'wavestore_brand.brand')
            ->join('wavestore_products', 'wavestore_products.id_brand', '=', 'wavestore_brand.id')
            ->where('wavestore_products.id_category', $idCategory)
            ->distinct()
            ->get();
    }
}
