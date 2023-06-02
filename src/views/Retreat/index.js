import { Outlet } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { RetreatNavMenu } from "./components/RetreatNavMenu";

export function Retreat() {
  return (
    <main className="main_wrapper">
      <OverlayScrollbarsComponent>
        <div className="side_wrapper left">
          <RetreatNavMenu />
        </div>
      </OverlayScrollbarsComponent>
      <div className="content_separator" />
      <OverlayScrollbarsComponent defer>
        <div className="side_wrapper">
          <Outlet />
        </div>
      </OverlayScrollbarsComponent>
    </main>
  );
}

export function RetreatStartPage() {
  return (
    <div>
      <p>RETREAT START PAGE</p>
      <p>under developing</p>
    </div>
  );
}
