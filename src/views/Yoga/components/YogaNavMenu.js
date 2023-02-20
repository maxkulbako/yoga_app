import {useState} from "react";
import { yogaMenuList } from "../../../core/constants/storage";
import { MenuButton } from "./MenuButton";


export function YogaNavMenu ({ menuList = yogaMenuList }) {
  const [active, setActive] = useState(null);

  return (
    <div>
      { menuList.map(({title, background, link}, index) => (
        <MenuButton
          isSelected = {active === title}
          onClick={() => setActive(title)}
          link={link} key={index}
          title={title}
          background={background}>
        </MenuButton>
      ))
      }
    </div>
  );
}
