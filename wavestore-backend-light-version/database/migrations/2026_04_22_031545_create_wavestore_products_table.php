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
        Schema::create('wavestore_products', function (Blueprint $table) {
            $table->id();
            $table->string('item_ID', 50)->unique();
            $table->foreignId('id_brand')->constrained('wavestore_brand');
            $table->foreignId('id_category')->constrained('wavestore_category');
            $table->string('model', 150);
            $table->boolean('in_stock')->default(true);
            $table->text('description')->nullable();
            $table->text('product_info')->nullable();
            $table->decimal('price', 10, 2);
            $table->string('img', 255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wavestore_products');
    }
};
