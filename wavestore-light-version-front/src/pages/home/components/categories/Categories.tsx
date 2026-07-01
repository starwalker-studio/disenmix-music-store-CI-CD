import { NavLink } from "react-router-dom";
import { CAT_INDEX } from "./categories";
import style from "./Categories.module.scss";

export const Categories = () => {
  return (
    <>
      <section className={style.category_section}>
        <div className={style.category_container}>
          <div className={style.category_wrapper}>
            <div className={style.category_content}>
              <div className={style.category_header}>
                <h2>Popular Categories</h2>
              </div>
              <div className={style.cat_grid}>
                {CAT_INDEX.map((item) => (
                  <NavLink to={item.link} className={style.cat_item} key={item.id}>
                    <picture className={style.cat_image}>
                      <img src={item.img} alt="" />
                    </picture>
                    <div>
                      <h3>{item.label}</h3>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
