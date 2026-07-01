import { Button } from "../../../../components/ui/button/Button";
import style from "./Payment.module.scss";

export const Payment = () => {
  return (
    <section className={style.payment_section}>
      <div className={style.payment_container}>
        <div className={style.payment_wrapper}>
          <div className={style.payment_content}>
            <div className={style.payment_card}>
              <img src="/img/payment/payment-card.jpg" alt="" />
              <div className={style.payment_text}>
                <h2>
                  Pay your way. We accept credit cards, debit cards, and more
                </h2>
                <p>checkout is always fast and secure.</p>
                <Button label="Learn more →" variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
