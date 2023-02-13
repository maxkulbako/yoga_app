import { Link } from "react-router-dom";

export function Header () {
  return (
    <div className="header_wrapper">
      <div className="logo_wrapper">
        <a href="#">
           <img alt="logo" src="https://res.cloudinary.com/dd69ztxsd/image/upload/v1676218039/NANA_yoga_7_eqkeld.png"/>
        </a>
      </div>
      <nav className="nav_wrapper">
        <ul>
          <li>
            <Link className="header_nav_link" to={`about/`}>о нане</Link>
          </li>
          <div className="header_nav_separator"></div>
          <li>
            <Link className="header_nav_link" to={`yoga/`}>йога</Link>
          </li>
          <div className="header_nav_separator"></div>
          <li>
            <Link className="header_nav_link" to={`retreat/`}>ретрит</Link>
            </li>
          <div className="header_nav_separator"></div>
          <li>
            <Link className="header_nav_link" to={`contacts/`}>контакты</Link>
          </li>
        </ul>
      </nav>
    </div> 
  );
}