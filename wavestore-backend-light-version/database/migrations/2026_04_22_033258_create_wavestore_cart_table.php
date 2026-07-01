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
        Schema::create('wavestore_cart', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_user')->constrained('wavestore_user');
            $table->string('item_ID', 50);
            $table->integer('quantity')->default(1);
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
        Schema::dropIfExists('wavestore_cart');
    }
};
