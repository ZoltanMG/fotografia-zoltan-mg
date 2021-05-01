import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
    return (
        <nav>
            <div className="navbar">
                <Link className="logo" to="/" >Zoltán MG</Link>
                <ul>
                    <li>
                        <Link className="links" to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link className="links" to="/galeria">Galeria</Link>
                    </li>
                    <li>
                        <Link className="links" to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
