import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useProductStore } from "../../../api/store/product.store";
import { FOOTER_LINKS, SOCIAL_LINKS } from "./footer";
import style from "./Footer.module.scss";

export const Footer = () => {
  const { categories, fetchProductCategories } = useProductStore();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetchProductCategories();
  }, []);

  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.footer_wrapper}>
          <div className={style.footer_grid}>
            <div className={style.footer_brand}>
              <NavLink to={"/"}>
                <img src="/logo/wavestore-logo.svg" alt="" />
              </NavLink>
              <p className={style.footer_tagline}>Your sound, your way.</p>
              <div className={style.footer_socials}>
                {SOCIAL_LINKS.map(({ icon, url }, i) => (
                  <a key={i} href={url} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ))}
              </div>
            </div>

            <div className={style.footer_col}>
              <h3>Explore</h3>
              <ul>
                {categories.map((item) => (
                  <li key={item.id}>
                    <NavLink to={`/shop/${item.slug}`}>{item.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className={style.footer_col}>
              <h3>Support</h3>
              <ul>
                {FOOTER_LINKS.support.map((link) => (
                  <li key={link.label}>
                    <NavLink to={link.to}>{link.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className={style.footer_col}>
              <h3>Follow Us</h3>
              <div className={style.footer_socials_col}>
                {SOCIAL_LINKS.map(({ icon, url }, i) => (
                  <a key={i} href={url} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={style.footer_bottom}>
            <p className={style.footer_disclaimer}>
              This online store is for demonstration purposes only. Wave Store
              is a fictional project developed as part of a creative portfolio.
            </p>
            <p className={style.footer_copy}>
              © {currentYear} Disenmix. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
