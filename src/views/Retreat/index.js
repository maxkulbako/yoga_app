import { useLocation, Outlet, ScrollRestoration } from 'react-router-dom';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { RetreatNavMenu } from './components/RetreatNavMenu';
import { BaseButton } from '../components';
import { useContext, useEffect, useRef } from 'react';
import { ModalContext } from '../components/Modal/ModalContext';

export function Retreat() {
  let location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }, [location]);
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
          <ScrollRestoration />
          <Outlet />
        </div>
      </OverlayScrollbarsComponent>
    </main>
  );
}

export function RetreatStartPage() {
  const { setActiveContant } = useContext(ModalContext);
  return (
    <div className="page_container">
      <div className="page_text_block">
        <p>
          Today, each of us needs a breath of fresh air—a chance to break free
          from daily routines and stop running like a hamster on a wheel. Some
          need to ask themselves important questions (actually, we all do),
          while others just need to rest and reconnect with their true nature.
        </p>
        <p>
          A retreat is a place for resetting and immersing oneself, shifting the
          focus inward, and reconnecting with oneself. Each gathering here is
          filled with practices and realizations. While using the same tools,
          everyone gains their own insights and takes away something unique.
          It’s a place where you can let go, exhale, forgive, and release.
        </p>
        <p>Here, you can clear your mind and move closer to a state of yoga.</p>
        <p>
          Don’t expect any specific results; after all, this is what yoga
          teaches us. Simply join if you feel drawn to it, if you have the
          desire—or perhaps even the need.
        </p>
        <p>
          In every journey, we carry ourselves with us, so let’s gain this
          clarity and embark on the most important journey—to ourselves.
        </p>
        <p>The program for each retreat is created individually.</p>
        <p>
          If you want to be the first to know about the next retreat and sign up
          at the best rates, leave a request below, and we’ll reach out to you
          first (*filling out the form does not oblige you to attend).
        </p>
        <p>OM.</p>
      </div>
      <BaseButton
        title="Start Your Retreat Journey"
        onClick={() => setActiveContant('retreat')}
      />
    </div>
  );
}
