import { useLocation } from "react-router-dom";
import { BackButton } from "../Buttons/BackButton";

import "./title.scss";

export function TitleBlock({ title }) {
  const location = useLocation();
  const backButtonVisible = location.pathname.split("/").length > 3;

  const newPath = location.pathname.substring(
    0,
    location.pathname.lastIndexOf("/")
  );

  return (
    <div className="title_block_wrapper">
      {backButtonVisible && <BackButton newPath={newPath} />}
      <div
        className="title_text_top"
        style={{
          textAlign: title === ("контакты" && "о Нане") ? "center" : null,
        }}
      >
        {title}
      </div>
      <div className="title_separator" />
    </div>
  );
}
