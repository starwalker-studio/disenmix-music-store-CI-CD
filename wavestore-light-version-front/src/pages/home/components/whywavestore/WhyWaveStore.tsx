import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WHY_ITEMS } from "./whywavestore";
import style from "./WhyWaveStore.module.scss";

export const WhyWaveStore = () => {
  return (
    <section className={style.why_section}>
      <div className={style.why_container}>
        <div className={style.why_wrapper}>
          <div className={style.why_content}>
            <div className={style.why_header}>
              <h2>Why Shop at WaveStore?</h2>
            </div>
            <div className={style.why_grid}>
              {WHY_ITEMS.map((item) => (
                <div className={style.why_item} key={item.id}>
                  <div className={style.why_icon}>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
