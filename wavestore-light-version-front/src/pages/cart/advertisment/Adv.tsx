import style from "./Adv.module.scss";

export const Adv = () => {
  return (
    <div className={style.advertisment}>
      <div className={style.payment_card}>
        <img src="/img/payment/payment-card-2.jpg" alt="" />
        <div className={style.payment_text}>
          <h2>Pay your way. We accept credit cards, debit cards, and more</h2>
          <p>checkout is always fast and secure.</p>
        </div>
      </div>
    </div>
  );
};
