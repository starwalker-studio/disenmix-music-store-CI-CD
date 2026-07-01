<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('wavestore_product_images', function (Blueprint $table) {
            $table->id();
            $table->string('item_ID', 50);
            $table->string('url', 255);
            $table->integer('sort_order')->default(0);

            $table->foreign('item_ID')
                ->references('item_ID')
                ->on('wavestore_products');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wavestore_product_images');
    }
};
