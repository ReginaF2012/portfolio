import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume'

function App() {
  return (
    <Router>
      <Header/>
      <Sidebar/>
      <Switch>
        <Route exact path='/regina-portfolio/'>
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
    </Router>
    
  );
}

export default App;
