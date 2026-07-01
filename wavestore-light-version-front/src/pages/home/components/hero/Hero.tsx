import { Button } from "../../../../components/ui/button/Button";
import style from "./Hero.module.scss";

export const Hero = () => {
  return (
    <>
    <section className={style.hero_section}>
      <div className={style.overlay} />
      <div className={style.hero_container}>
        <div className={style.hero_wrapper}>
          <div className={style.hero_content}>
            <div className={style.offer_header}>
              <h1>SALE 40%</h1>
            </div>
            <p>Limited time offer on selected gear</p>
            <div className={style.sub_header}>
              <p>Your Next Favorite Instrument Starts Here</p>
              <div className={style.flex_button}>
                <div>
                  <Button label="Shop Now →" />
                </div>
                <div>
                  <span>Top brands. Unbeatable prices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className={style.financing_banner}>
      <span>Check out the latest guitars, basses & drums.</span>
      <p>Learn more</p>
    </div>
    </>
  );
};
