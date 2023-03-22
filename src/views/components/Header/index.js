import React, { useState } from "react";
import { NavBar, MobileNavBar } from "../index";
import { LOGO_BLACK, navMenuList } from "../../../core/constants/storage";
import { StartPage } from "../../index";
import { useScrollDirection } from "../../../core/hooks";

import "./_header.scss";

export function Header() {
  const [isStartOpen, setOpenStart] = useState(true);
  const scrollDirection = useScrollDirection();

  const handleStartPage = () => {
    setOpenStart(!isStartOpen);
  };

  return (
    <div className="header_container">
      <StartPage onStart={handleStartPage} isStartOpen={isStartOpen} />
      <div
        className={`header_wrapper ${
          scrollDirection === "down" ? "hide" : "show"
        }`}
      >
        <NavBar
          onStart={handleStartPage}
          navList={navMenuList}
          logo={LOGO_BLACK}
        />
        <MobileNavBar />
      </div>
    </div>
  );
}
