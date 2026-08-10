import style from "./Spinner.module.scss";

export const Spinner = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <div className={style.spinner_wrapper}>
      <div className={style.spinner} />
      <span className={style.spinner_text}>{text}</span>
    </div>
  );
};
