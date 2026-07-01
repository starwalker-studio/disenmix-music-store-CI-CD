import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckoutPage } from "../../../components/checkout/CheckoutPage";
import style from "./CheckoutModal.module.scss";

type CheckoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CheckoutModal = ({ isOpen, onClose }: CheckoutModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <div className={style.modal_header}>
          <h2>Checkout Stripe</h2>
          <button className={style.close_btn} onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className={style.modal_body}>
          <CheckoutPage />
        </div>
        {/* <div className={style.modal_footer}>aquí van los botones</div> */}
      </div>
    </div>
  );
};
