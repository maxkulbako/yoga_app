import { Link } from 'react-router-dom';

export function MenuButton({
  title, background, link, isSelected, ...props
}) {
  let onClick;
  if (props) {
    onClick = props.onClick;
  }

  return (
    <div className="wrapper_content_menu_button">
      <div className={`dot ${isSelected ? 'selected' : ''}`} />
      <Link
        to={`/yoga_app/yoga/${link}`}
        className={`content_menu_button ${isSelected ? 'selected' : ''}`}
        style={{ backgroundImage: `url(${background})` }}
        onClick={onClick}
      >
        <p>
          {title}
        </p>
      </Link>
    </div>
  );
}
