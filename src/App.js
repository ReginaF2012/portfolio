import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <Router>
      < Header />
      < Sidebar />
      <Switch>
        <Route exact path='/'>
          < Home />
        </Route>
      </Switch>
      < Footer />
    </Router>
    
  );
}

export default App;
