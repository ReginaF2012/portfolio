import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      < Header />
      < Sidebar />
      <Switch>
        <Route exact path='/'>
          < Home />
        </Route>
        <Route exact path='/portfolio'>
          < Portfolio />
        </Route>
      </Switch>
      < Footer />
    </Router>
    
  );
}

export default App;
