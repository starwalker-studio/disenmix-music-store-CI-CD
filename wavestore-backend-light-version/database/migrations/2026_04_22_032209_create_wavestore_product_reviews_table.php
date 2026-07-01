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
        Schema::create('wavestore_product_reviews', function (Blueprint $table) {
            $table->id();
            $table->string('item_ID', 50);
            $table->text('comment')->nullable();
            $table->integer('rating');
            $table->timestamp('created_at')->useCurrent();

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
        Schema::dropIfExists('wavestore_product_reviews');
    }
};
