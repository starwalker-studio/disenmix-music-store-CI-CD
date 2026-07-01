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
        Schema::create('wavestore_orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_user')->constrained('wavestore_user');
            $table->string('mp_payment_id', 100)->nullable();
            $table->string('mp_status', 50)->nullable();
            $table->decimal('total', 10, 2);
            $table->timestamp('created_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wavestore_orders');
    }
};
