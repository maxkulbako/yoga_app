import { yogaMenuList } from "../../../core/constants/storage";
import { MenuButton } from "./MenuButton";


export function YogaNavMenu ({ menuList = yogaMenuList }) {
  return (
    <div>
      { menuList.map(({title, background, link}, index) => (
        <MenuButton link={link} key={index} title={title} background={background}></MenuButton>
      ))
      }
    </div>
  );
}
