import React from 'react';
import Fotos from './components/fotos/Fotos'
import Contacto from './components/contacto/Contacto'
import Inicio from './components/inicio/Inicio'
import Nav from './components/nav/Nav'
import './app.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/fotos" component={Fotos} />
        <Route exact path="/contacto" component={Contacto} />
      </Switch>
    </Router>
  );
}

export default App;
