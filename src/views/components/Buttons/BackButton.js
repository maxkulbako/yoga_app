import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionChangeMainTitle } from "../TitleBlock/actions";
import { navMenuList } from "../../../core/constants/storage";

import "./back_button.scss";

export function BackButton({ newPath }) {
  const location = useLocation();
  const mainPath = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  let title;

  // console.log(location.pathname.split("/"));

  if (location.pathname.split("/").length > 3) {
    const activeMenu = navMenuList.find((menu) => menu.link === mainPath);
    title = activeMenu.title;
  }

  return (
    <div
      className="back_button_wrapper"
      onClick={() => dispatch(actionChangeMainTitle(title))}
      role="presentation"
    >
      <Link to={newPath}>
        <button type="button">
          <svg width="29" height="29" viewBox="0 0 29 29" fill="currentColor">
            <path
              d="M14.5001 27.0651C12.8587 27.0678 11.2329 26.7463 9.71609 26.1191C8.19925 25.4919 6.82122 24.5713 5.66112 23.4101C0.787115 18.5361 0.787115 10.6061 5.66112 5.73207C8.02212 3.37107 11.1611 2.07007 14.5001 2.07007C17.8391 2.07007 20.9781 3.37007 23.3391 5.73207C28.2131 10.6061 28.2131 18.5361 23.3391 23.4101C22.179 24.5713 20.801 25.4919 19.2841 26.1191C17.7673 26.7463 16.1415 27.0678 14.5001 27.0651ZM7.07512 21.9961C11.1691 26.0901 17.8311 26.0901 21.9251 21.9961C23.9081 20.0121 25.0001 17.3751 25.0001 14.5711C25.0001 11.7671 23.9081 9.13007 21.9251 7.14607C19.9421 5.16207 17.3051 4.07007 14.5001 4.07007C11.6951 4.07007 9.05912 5.16307 7.07512 7.14607C5.09112 9.12907 4.00012 11.7661 4.00012 14.5711C4.00012 17.3761 5.09212 20.0121 7.07512 21.9961Z"
              fill="currentColor"
            />
            <path
              d="M16.7981 20.1669C16.6668 20.1671 16.5367 20.1413 16.4154 20.091C16.294 20.0407 16.1838 19.9669 16.0911 19.8739L11.4951 15.2779C11.4022 15.1852 11.3284 15.075 11.2781 14.9536C11.2278 14.8323 11.2019 14.7023 11.2019 14.5709C11.2019 14.4396 11.2278 14.3096 11.2781 14.1883C11.3284 14.0669 11.4022 13.9567 11.4951 13.8639L16.0911 9.26795C16.1839 9.1751 16.2942 9.10145 16.4155 9.05121C16.5368 9.00096 16.6668 8.9751 16.7981 8.9751C16.9294 8.9751 17.0594 9.00096 17.1807 9.05121C17.302 9.10145 17.4123 9.1751 17.5051 9.26795C17.5979 9.36079 17.6716 9.47101 17.7218 9.59232C17.7721 9.71363 17.798 9.84364 17.798 9.97495C17.798 10.1062 17.7721 10.2363 17.7218 10.3576C17.6716 10.4789 17.5979 10.5891 17.5051 10.6819L13.6161 14.5709L17.5051 18.4599C17.6454 18.5996 17.741 18.7778 17.7799 18.9719C17.8187 19.166 17.799 19.3673 17.7233 19.5502C17.6475 19.7331 17.5191 19.8894 17.3544 19.9992C17.1897 20.109 16.9961 20.1674 16.7981 20.1669Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}
