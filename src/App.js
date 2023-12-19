import logo from './logo.svg';
import './App.css';
import Header from './container/Header';
import Footer from './container/Footer';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header></Header>
        <Routes>
        </Routes>
      </BrowserRouter>


      <Footer></Footer>
    </div>
  );
}

export default App;
