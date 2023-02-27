import { Outlet } from 'react-router-dom';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { YogaNavMenu } from './components/YogaNavMenu';

export function ContentYoga() {
  return (
    <main className="main_wrapper">
      <OverlayScrollbarsComponent defer>
        <div className="side_wrapper">
          <Outlet />
        </div>
      </OverlayScrollbarsComponent>
      <div className="content_separator" />
      <OverlayScrollbarsComponent>
        {/* <div className="temporary1"></div> */}
        <div className="side_wrapper right">
          <YogaNavMenu />
        </div>
        {/* <div className="temporary2"></div> */}
      </OverlayScrollbarsComponent>
    </main>
  );
}
