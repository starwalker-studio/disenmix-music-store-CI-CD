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
        Schema::create('wavestore_order_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_order')->constrained('wavestore_orders');
            $table->string('item_ID', 50);
            $table->integer('quantity');
            $table->decimal('unit_price', 10, 2);

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
        Schema::dropIfExists('wavestore_order_items');
    }
};
