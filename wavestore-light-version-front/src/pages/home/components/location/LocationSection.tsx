import { faLocationDot, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CITIES } from "./cities";
import style from "./LocationSection.module.scss";

export const LocationSection = () => {
  return (
    <section className={style.location_section}>
      <div className={style.location_container}>
        <div className={style.location_wrapper}>
          <div className={style.location_content}>
            <div className={style.location_header}>
              <h2>Where We Ship</h2>
              <p>Delivering across the United States</p>
            </div>
            <div className={style.location_map}>
              <div className={style.map_icon}>
                <FontAwesomeIcon icon={faMapLocation} />
              </div>
              <span>WaveStore — United States</span>
            </div>
            <div className={style.location_cities}>
              {CITIES.map((city) => (
                <div className={style.city_item} key={city.id}>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{city.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
