import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume'

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Header/>
      <Sidebar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/regina-portfolio/portfolio'>
          <Portfolio/>
        </Route>
        <Route exact path='/regina-portfolio/contact' >
          <Contact/>
        </Route>
        <Route exact path='/regina-portfolio/resume'>
          <Resume/>
        </Route>
      </Switch>
      <Footer/>
    </HashRouter>
    
  );
}

export default App;
