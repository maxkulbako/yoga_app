import React from "react";
import { NavBar, MobileNavBar } from "../index";
import { LOGO_BLACK, navMenuList } from "../../../core/constants/storage";

import "./_header.scss";

export function Header() {
  return (
    <div className="header_container">
      <div className="header_wrapper">
        <NavBar navList={navMenuList} logo={LOGO_BLACK} />
        <MobileNavBar />
      </div>
    </div>
  );
}
