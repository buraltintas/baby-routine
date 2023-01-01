import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../views/home';

const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/about'>
            <p>about</p>
          </Route>
          <Route path='/users'>
            <p>users</p>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
