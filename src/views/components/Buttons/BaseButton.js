import "./base_button.scss";

export function BaseButton({ title, variant, type = "button" }) {
  return (
    <div className={`base_btn_wrapper ${variant || ""}`}>
      <button type={type} className="base_btn">
        <p>{title}</p>
      </button>
    </div>
  );
}
