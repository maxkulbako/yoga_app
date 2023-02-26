export function BaseButton ({ title }) {
  return (
    <div className="base_btn_wrapper">
      <button className="base_btn">
        <p>
          {title}
        </p>
      </button>
    </div>
  );
}
