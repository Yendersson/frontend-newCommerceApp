
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
