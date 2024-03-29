import './base_button.scss';

export function BaseButton({ title, variant, onClick, type = 'button', icon }) {
  return (
    <div className={`base_btn_wrapper ${variant || ''}`}>
      <button onClick={onClick} type={type} className="base_btn">
        <p>{title}</p>
        {icon}
      </button>
    </div>
  );
}
