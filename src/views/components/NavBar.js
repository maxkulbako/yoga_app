import {Fragment} from "react";
import {Link, useLocation} from "react-router-dom";

export function NavBar ({variant = null, navList, logo,  onClick, onStart}) {
  const location = useLocation();


  return (
    <Fragment>
      <div className={`logo_wrapper ${variant}`} onClick={onStart}>
        <button>
          <img alt="logo" src={logo}/>
        </button>
      </div>
      <nav className={`nav_wrapper ${variant}`}>
        <ul className={variant ? "start" : ""}>
          {
            navList.map(({title, link}) => (
              <Fragment key={title}>
                <li>
                  <Link
                    onClick={onClick}
                    className={`header_nav_link ${location.pathname.includes(link) ? 'active' : null}`}
                    to={link}>{title}</Link>
                </li>
                <div onClick={onClick} className="header_nav_separator"></div>
              </Fragment>
            ))
          }
        </ul>
      </nav>
    </Fragment>
  );
}
