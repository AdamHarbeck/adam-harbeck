import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './routes/home';
import Projects from './routes/projects';
import Contact from './routes/contact';
import About from './routes/about';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={ <Home /> } />
          <Route path={'/projects'} element={ <Projects /> } />
          <Route path={'/contact'} element={ <Contact /> } />
          <Route path={'/about'} element={ <About /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
