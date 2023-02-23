import { NavBar } from "./NavBar";
import { MobileNavBar } from "./MobileNavBar";
import { LOGO_BLACK, navMenuList } from "../../core/constants/storage";
import { StartPage } from "./StartPage";
import React, {useState} from "react";


export function Header () {
  const [isStartOpen, setOpenStart] = useState(true);

  const handleStartPage = () => {
    setOpenStart(!isStartOpen);
  }

  return (
    <div className="header_container">
      <StartPage onStart={handleStartPage} isStartOpen={isStartOpen} />
      <div className="header_wrapper">
        <NavBar onStart={handleStartPage} navList={navMenuList} logo={LOGO_BLACK}/>
        <MobileNavBar/>
      </div>
    </div>
  );
}
