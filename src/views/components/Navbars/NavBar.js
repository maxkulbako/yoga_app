import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { actionChangeMainTitle } from "../TitleBlock/actions";

import "./navbars.scss";

export function NavBar({ variant = null, navList, logo }) {
  // let location = useLocation().pathname;
  // // const dispatch = useDispatch();

  // if (location.split("/").length > 2) {
  //   location = location.split("/")[2];
  // } else location = location.split("/")[1];

  return (
    <>
      <div className={`logo_wrapper ${variant}`} role="presentation">
        <Link to="/yoga_app" type="button">
          <img alt="logo" src={logo} />
        </Link>
      </div>
      <nav className={`nav_wrapper ${variant}`}>
        <ul className={variant ? "start" : ""}>
          {navList.map(({ title, link }) => (
            <Fragment key={title}>
              <li
                // onClick={() => dispatch(actionChangeMainTitle(title))}
                role="presentation"
              >
                <Link
                  className="header_nav_link"
                  // onClick={onClick}
                  // className={`header_nav_link ${
                  //   location.includes(link) ? "active" : null
                  // }`}
                  to={`/yoga_app/main/${link}`}
                >
                  {title}
                </Link>
              </li>
              <div
                // onClick={onClick}
                className="header_nav_separator"
                role="presentation"
              />
            </Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
}
