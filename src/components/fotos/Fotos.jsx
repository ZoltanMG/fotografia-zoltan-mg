import React, { useState } from 'react';
import AllFotos from '../allfotos/AllFotos';
import Galerias from '../galerias/Galerias';
import './fotos.css';

const Fotos = () => {
    const [galeriaOFoto, setGaleriaOFoto] = useState('fotos')
    const galeria = () => {
        setGaleriaOFoto('galeria')
    }
    const fotos = () => {
        setGaleriaOFoto('fotos')
    }
    return (
        <div className="pagina-galeria">
            <div className="contenedor-galeria">
                <div className="botones-galeria">
                    <button
                        className={galeriaOFoto === 'fotos' ? 'boton-target' : 'color-boton-estandar'}
                        onClick={fotos}
                    >
                        Todas las fotos
                    </button>
                    <button
                        className={galeriaOFoto === 'galeria' ? 'boton-target' : 'color-boton-estandar'}
                        onClick={galeria}
                    >
                        Galerias
                    </button>
                </div>
                <div className="contenido-galeria">
                    {
                        galeriaOFoto === 'galeria' ?
                            (<Galerias />)
                            :
                            (<AllFotos />)
                    }
                </div>
            </div>

        </div>
    );
}
export default Fotos;
