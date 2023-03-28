import "./base_button.scss";

export function BaseButton({ title, variant }) {
  return (
    <div className={`base_btn_wrapper ${variant || ""}`}>
      <button className="base_btn" type="button">
        <p>{title}</p>
      </button>
    </div>
  );
}
