export function BuyButton ({ title }) {
  return (
    <div className="buy_btn_wrapper">
      <button className="buy_btn">
        <p>
          {title}
        </p>
      </button>
    </div>
  );
}
