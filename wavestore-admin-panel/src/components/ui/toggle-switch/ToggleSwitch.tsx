import clsx from "clsx";
import style from "./ToggleSwitch.module.scss";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  id?: string;
}

export const ToggleSwitch = ({
  checked,
  onChange,
  label,
  id = "toggle",
}: ToggleSwitchProps) => {
  return (
    <div className={style.toggle_wrapper}>
      {label && (
        <label htmlFor={id} className={style.toggle_label}>
          {label}
        </label>
      )}
      <button
        type="button"
        id={id}
        role="switch"
        aria-checked={checked}
        className={clsx(
          style.toggle_track,
          checked && style.toggle_track_active,
        )}
        onClick={() => onChange(!checked)}
      >
        <span
          className={clsx(
            style.toggle_thumb,
            checked && style.toggle_thumb_active,
          )}
        />
      </button>
    </div>
  );
};
