import './styles/app.css';
import { Content } from './views';
import { Header, Footer } from './views/components';

export default function App() {
  return (
    <div className="App">
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}
