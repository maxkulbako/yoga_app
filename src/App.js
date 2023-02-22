import './styles/app.css';
import { Header, Footer, TitleBlock } from './views/components';
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";


function App({title}) {
  return (
    <div className="App">
        <Header/>
        <TitleBlock title={title}/>
        <Outlet/>
        <Footer/>
    </div>
  );
}

const mapState = (state) => ({
  title: state.activeMenuButton
})

export default connect(mapState)(App);
