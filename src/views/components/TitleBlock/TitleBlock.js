import { BackButton } from '../Buttons/BackButton';
import { useLocation } from "react-router-dom";

export function TitleBlock ({title}) {
  const location = useLocation();
  const backButtonVisible = location.pathname.split('/').length > 2;
  const isActive = title && title !== 'о нане' && title !== 'йога' && location.pathname !== '/yoga';
  
  const newPath = location.pathname.substring(
    0,
    location.pathname.lastIndexOf('/')
  );

  return (

    <div>
      { isActive &&
        <div className="title_block_wrapper">
          { backButtonVisible && <BackButton newPath={newPath}/>}
          <div className="title_text_top">
            {title !== 'контакты' ? `${title} с Наной` : title}
          </div>
          <div className="title_separator"></div>
        </div>
      }
    </div>

  );
}
