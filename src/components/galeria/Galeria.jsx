import React, { useState } from 'react';
import './galeria.css'

const Galeria = () => {

    const [galeriaOFoto, setGaleriaOFoto] = useState('galeria')

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
                    <button onClick={galeria}>Galerias</button>
                    <button onClick={fotos}>Todas las fotos</button>
                </div>
                <div className="contenido-galeria">
                    {
                        galeriaOFoto === 'galeria' ?
                            (
                                <div>Galerias</div>
                            )
                            :
                            (
                                <div>Fotos</div>
                            )
                    }
                </div>
            </div>

        </div>
    )
}

export default Galeria
