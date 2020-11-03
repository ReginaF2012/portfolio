import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      < Header />
      < Sidebar />
      <Switch>
        <Route path='/'>
          < Home />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
