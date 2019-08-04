import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import {Route,Switch,withRouter} from 'react-router-dom'
import Home from './containers/Home/Home';
import FavorietsContainer from './containers/Favorites/FavoritesContainer/FavoritesContainer';

const app = () => {

  let routes = (
    <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/favorites" component={FavorietsContainer}/>
       <Route path="/:key/:name" exact component={Home}/>
    </Switch>
  )

  return (
    <Layout>
      {routes}
    </Layout>

  );
}

export default withRouter(app);
