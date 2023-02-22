import { Outlet } from "react-router-dom";
import { YogaNavMenu } from "./components/YogaNavMenu";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";


export function ContentYoga () {

  return (
    <main className="main_wrapper">
      <OverlayScrollbarsComponent defer>
        <div className="side_wrapper">
          <Outlet/>
        </div>
      </OverlayScrollbarsComponent>
      <div className="content_separator"></div>
      <OverlayScrollbarsComponent >
        <div className="side_wrapper right">
          <YogaNavMenu/>
        </div>
      </OverlayScrollbarsComponent>
    </main>
  );
}
