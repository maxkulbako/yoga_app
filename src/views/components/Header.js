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
            <p>о нане</p>
          </li>
          <div className="header_nav_separator"></div>
          <li>
            <p>йога</p>
          </li>
          <div className="header_nav_separator"></div>
          <li>
            <p>ретрит</p>
            </li>
          <div className="header_nav_separator"></div>
          <li>
            <p>контакты</p>
          </li>
        </ul>
      </nav>
    </div> 
  );
}