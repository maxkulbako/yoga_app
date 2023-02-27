import { useState } from 'react';
import { connect } from 'react-redux';
import { yogaMenuList } from '../../../core/constants/storage';
import { actionChangeMainTitle } from '../../components/TitleBlock/actions';
import { MenuButton } from './MenuButton';

function ViewYogaNavMenu({ menuList = yogaMenuList, changeTitle }) {
  const [active, setActive] = useState(null);

  return (
    <div>
      { menuList.map(({ title, background, link }) => (
        <MenuButton
          isSelected={active === title}
          onClick={() => {
            setActive(title);
            changeTitle(title);
          }}
          link={link}
          key={title}
          title={title}
          background={background}
        />
      ))}
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  changeTitle: (title) => dispatch(actionChangeMainTitle(title)),
});

export const YogaNavMenu = connect(null, mapDispatch)(ViewYogaNavMenu);
