<?php

namespace App\Http\Controllers\stripe;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;

class CheckoutController extends Controller
{
    public function createPaymentIntent(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

        // calculas el total desde los items que manda React
        $items = $request->input('items');
        $total = collect($items)->sum(function ($item) {
            return $item['price'] * $item['quantity'];
        });

        // Stripe maneja centavos — multiplicas por 100
        $paymentIntent = PaymentIntent::create([
            'amount'   => (int)($total * 100),
            'currency' => 'mxn',
            'metadata' => [
                'user_id' => 1, // tu DEMO_USER_ID
            ],
        ]);

        return response()->json([
            'client_secret' => $paymentIntent->client_secret,
        ]);
    }
}
