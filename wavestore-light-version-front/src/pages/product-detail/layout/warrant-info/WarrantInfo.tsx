import style from "./WarrantInfo.module.scss";

export const WarrantInfo = () => {
  return (
    <>
      <div className={style.warranty_container}>
        <h2>Warranty Info</h2>
        <div className={style.warranty_group}>
          <div className={style.warranty_text}>
            <h3>
              FREE 2-Year Total Confidence <span>Coverage Warranty</span>
            </h3>
            <p>Extra peace of mind at no extra cost.</p>
            <ul>
              <li>Save money with FREE parts and labor</li>
              <li>
                Get back to making music with the industry's fastest turnaround
                time
              </li>
              <li>
                Fix it the first time with our award-winning, factory-certified
                Service Department
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
