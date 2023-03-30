import React from "react";
import { NavBar } from "../components";
import { LOGO_WHITE, navMenuList } from "../../core/constants/storage";

import "./_startpage.scss";

const backgroundImage =
  "https://res.cloudinary.com/dd69ztxsd/image/upload/v1680187131/nana_yoga/start_img_aesq0c.jpg";

export function StartPage() {
  return (
    <div className="start_page_wrapper">
      <div
        className="start_page"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <NavBar navList={navMenuList} variant="start" logo={LOGO_WHITE} />
      </div>
    </div>
  );
}
