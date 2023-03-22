import "./base_button.scss";

export function BaseButton({ title }) {
  return (
    <div className="base_btn_wrapper">
      <button className="base_btn" type="button">
        <p>{title}</p>
      </button>
    </div>
  );
}
