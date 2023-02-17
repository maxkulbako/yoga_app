import { NavBar } from "./NavBar";
import { MobileNavBar } from "./MobileNavBar";
import { LOGO_BLACK, navMenuList } from "../../core/constants/storage"


export function Header () {
  return (
    <div className="header_wrapper">
      <NavBar navList={navMenuList} logo={LOGO_BLACK}/>
      <MobileNavBar/>
    </div>
  );
}

