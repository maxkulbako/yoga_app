import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { YogaNavMenu } from './components/YogaNavMenu';
import { useEffect, useRef } from 'react';
import { useLocation, Outlet, ScrollRestoration } from 'react-router-dom';

import './yoga.scss';

export function ContentYoga() {
  let location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }, [location]);

  return (
    <main className="main_wrapper">
      <OverlayScrollbarsComponent defer>
        <div className="side_wrapper">
          <ScrollRestoration />
          <div ref={ref} />
          <Outlet />
        </div>
      </OverlayScrollbarsComponent>
      <div className="content_separator" />
      <OverlayScrollbarsComponent>
        <div className="side_wrapper right">
          <YogaNavMenu />
        </div>
      </OverlayScrollbarsComponent>
    </main>
  );
}
