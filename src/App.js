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
        <Route exact path={process.env.PUBLIC_URL + '/'}>
          <Home/>
        </Route>
        <Route exact path={process.env.PUBLIC_URL + '/portfolio'}>
          <Portfolio/>
        </Route>
        <Route exact path={process.env.PUBLIC_URL + '/contact'} >
          <Contact/>
        </Route>
        <Route exact path={process.env.PUBLIC_URL + '/resume'}>
          <Resume/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
