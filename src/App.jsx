import React from 'react';
import Galeria from './components/galeria/Galeria'
import Contacto from './components/contacto/Contacto'
import Inicio from './components/inicio/Inicio'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/galeria">Galeria</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/galeria" component={Galeria} />
        <Route exact path="/contacto" component={Contacto} />
      </Switch>
    </Router>
  );
}

export default App;
