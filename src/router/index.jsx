import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { appContext } from '../context';
import Welcome from '../views/welcome';
import Home from '../views/home';

const AppRouter = () => {
  const { hasBabyInfo, babyInfo, isLoading } = useContext(appContext);

  return (
    <Router>
      <Backdrop
        sx={{ color: '#99e9f2', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      <div>
        <Switch>
          <Route path='/'>
            {hasBabyInfo || babyInfo?.name ? <Home /> : <Welcome />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
