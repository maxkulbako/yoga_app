// import { connect } from "react-redux";
import { Header, Footer, TitleBlock, Modal } from "./views/components";
import ModalProvider from "./views/components/Modal/ModalContext";
import { Outlet } from "react-router-dom";

import "./app.scss";

export function Main() {
  return (
    <ModalProvider>
      <div className="App">
        <Modal />
        <Header />
        <TitleBlock />
        <Outlet />
        <Footer />
      </div>
    </ModalProvider>
  );
}

// const mapState = (state) => ({
//   title: state.activeMenuButton,
// });
