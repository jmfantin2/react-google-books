import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import BookDetails from './pages/BookDetails'
import Favorites from "./pages/Favorites";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/bookDetails" component={BookDetails}/>
        <Route path="/favorites" component={Favorites}/>
      </Switch>
    </BrowserRouter>
  );
}