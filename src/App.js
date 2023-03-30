import "./app.scss";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { Header, Footer, TitleBlock, Modal } from "./views/components";
import ModalProvider from "./views/components/Modal/ModalContext";

function App({ title }) {
  return (
    <ModalProvider>
      <div className="App">
        <Modal />
        <Header />
        <TitleBlock title={title} />
        <Outlet />
        <Footer />
      </div>
    </ModalProvider>
  );
}

const mapState = (state) => ({
  title: state.activeMenuButton,
});

export default connect(mapState)(App);
