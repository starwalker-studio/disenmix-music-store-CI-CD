import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button/Button";
import style from "./Success.module.scss";

export const Success = () => {
  return (
    <div className={style.success_section}>
      <div className={style.success_container}>
        <div className={style.success_wrapper}>
          <div className={style.success_content}>
            <div className={style.success_header}>
              <div className={style.header_icon}>
                <span>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </span>
                <h2>You're all set!</h2>
              </div>
              <p>Your payment was processed successfully.</p>
              <p>We're getting your order ready!</p>
            </div>
            <div className={style.success_order_id}>
              <h3>Order ID: #WS-00001</h3>
            </div>
            <div className={style.success_mail_confirmation}>
              <p>A confirmation email will be sent to your inbox shortly.</p>
            </div>
            <div className={style.success_logo}>
              <img src="/logo/wavestore-logo.svg" alt="" />
            </div>
            <div className={style.success_continue_button}>
              <NavLink to={"/"}>
                <Button label="Continue Shopping →" variant="outline" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
