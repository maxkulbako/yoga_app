import { useState } from "react";
import { yogaMenuList } from "../../../core/constants/storage";
import { actionChangeMainTitle } from '../../components/TitleBlock/actions';
import { MenuButton } from "./MenuButton";
import { connect } from "react-redux";

function ViewYogaNavMenu ({ menuList = yogaMenuList, changeTitle }) {
  const [active, setActive] = useState(null);

  return (
    <div>
      { menuList.map(({title, background, link}, index) => (
        <MenuButton
          isSelected = {active === title}
          onClick={() => {
            setActive(title);
            changeTitle(title);
          }}
          link={link} key={index}
          title={title}
          background={background}>
        </MenuButton>
      ))
      }
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  changeTitle: (title) => dispatch(actionChangeMainTitle(title))
})

export const YogaNavMenu =  connect(null, mapDispatch)(ViewYogaNavMenu)
