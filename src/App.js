import './styles/app.css';
import { Header, Footer } from './views/components';
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  );
}
