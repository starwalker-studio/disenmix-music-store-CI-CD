import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { Spinner } from "../ui/spinner/Spinner";
import style from "./Checkout.module.scss";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/shop/success",
      },
    });

    if (error) {
      console.error(error.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Spinner text="Processing payment..." />}
      <form
        onSubmit={handleSubmit}
        style={{ display: isLoading ? "none" : "block" }}
      >
        <PaymentElement />
        <div className={style.pay_button_row}>
          <button className={style.pay_button} disabled={!stripe || isLoading}>
            Pay Now
          </button>
        </div>
      </form>
    </>
  );
};
