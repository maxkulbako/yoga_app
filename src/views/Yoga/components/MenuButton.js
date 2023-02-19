import { Link } from "react-router-dom";

export function MenuButton ({ title, background, link }) {
  return (
    <div className="wrapper_content_menu_button">
      <Link
        to={`/yoga/${link}`}
        className="content_menu_button"
        style={{ backgroundImage: `url(${background})`}}>
      <p>
        {title}
        </p>
      </Link>
    </div>
  );
}
