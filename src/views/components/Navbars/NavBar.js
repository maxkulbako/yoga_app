import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './navbars.scss';

export function NavBar({ variant = null, navList, logo }) {
  return (
    <>
      <div className={`logo_wrapper ${variant}`} role="presentation">
        <Link to="/" type="button">
          <img alt="logo" src={logo} />
        </Link>
      </div>
      <nav className={`nav_wrapper ${variant}`}>
        <ul className={variant ? 'start' : ''}>
          {navList.map(({ title, link }) => (
            <Fragment key={title}>
              <li role="presentation">
                <Link className="header_nav_link" to={`/main/${link}`}>
                  {title}
                </Link>
              </li>
              <div className="header_nav_separator" role="presentation" />
            </Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
}
