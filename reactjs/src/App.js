import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom'; 
import Home from './routes/home';
import Projects from './routes/projects';
import Contact from './routes/contact';
import About from './routes/about';

// Originally had BrowserRouter, but that isn't supported on GH pages.
// Adding basename={process.env.PUBLIC_URL} brings up the content but 404s if refreshed.
// Changed to HashRouter because it works on GH pages
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path={'/'} element={ <Home /> } />
          <Route path={'/projects'} element={ <Projects /> } />
          <Route path={'/contact'} element={ <Contact /> } />
          <Route path={'/about'} element={ <About /> } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
