import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './routes/home';
import Projects from './routes/projects';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={ <Home /> } />
          <Route path={'/projects'} element={ <Projects /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
