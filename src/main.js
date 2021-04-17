import React from "react";
import Home from "./components/home/home";
import NotFound from "./components/notFound/notFound";
import Contact from "./components/contact/contact";
import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  </main>
);

export default Main;