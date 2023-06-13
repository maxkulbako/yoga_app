import { useLocation } from 'react-router-dom';
import { BackButton } from '../Buttons/BackButton';
import {
  navMenuList,
  yogaMenuList,
  retreatMenuList,
} from '../../../core/constants/storage';

import './title.scss';

export function TitleBlock() {
  const location = useLocation();
  const backButtonVisible = location.pathname.split('/').length > 4;

  const newPath = location.pathname.substring(
    0,
    location.pathname.lastIndexOf('/')
  );

  let title;
  if (
    location.pathname.includes('retreat') &&
    location.pathname.split('/').length > 4
  ) {
    title = retreatMenuList.find(
      (i) => i.link === location.pathname.split('/')[4]
    ).title;
  } else if (location.pathname.split('/').length > 4) {
    title = yogaMenuList.find(
      (i) => i.link === location.pathname.split('/')[4]
    ).title;
  } else {
    title = navMenuList.find(
      (i) => i.link === location.pathname.split('/')[3]
    ).title;
  }

  return (
    <div className="title_block_wrapper">
      {backButtonVisible && <BackButton newPath={newPath} />}
      <div
        className="title_text_top"
        style={{
          textAlign: title === ('контакты' && 'о Нане') ? 'center' : null,
        }}
      >
        {title}
      </div>
      <div className="title_separator" />
    </div>
  );
}
