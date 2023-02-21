import React from "react";
import { NavBar } from "./NavBar"
import {LOGO_WHITE, navMenuList} from "../../core/constants/storage";



const backgroundImage = "https://res.cloudinary.com/dd69ztxsd/image/upload/v1676986970/nana_yoga/IMG_5287_vt7u6s.jpg"

export function StartPage ({ onStart, isStartOpen }) {
  return (
    <div
      className={`start_page_wrapper ${isStartOpen ? '' : 'close'}`}
      onClick={onStart}
    >
      <div
        className="start_page"
        style={{ backgroundImage: `url(${backgroundImage})`}}
      >
      <NavBar navList={navMenuList} variant="start" logo={LOGO_WHITE}/>
      </div>
    </div>
  );
}
