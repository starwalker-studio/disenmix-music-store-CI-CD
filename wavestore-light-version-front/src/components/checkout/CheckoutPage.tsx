import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { SERVER_ENV } from "../../api/env/server.env";
import { useCartStore } from "../../api/store/cart.store";
import { Spinner } from "../ui/spinner/Spinner";
import { CheckoutForm } from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const { items } = useCartStore();

  useEffect(() => {
    // pide el client_secret a Laravel
    fetch(
      `${SERVER_ENV.SERVER_HOST_DEV}${SERVER_ENV.STORE}${SERVER_ENV.END_POINTS.CHECKOUT}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.client_secret);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <Spinner text="Loading payment..." />}
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};
