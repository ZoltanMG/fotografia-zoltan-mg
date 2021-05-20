import React from 'react';
import './allfotos.css'
import Prueba from '../foto/Foto'

const AllFotos = () => {
    const datos = require('../../data.json');

    return (
        <div>
            <h1>Todas las fotos</h1>
            <div className="content-all-fotos">
                {
                    datos.map((item, index) => (
                        <div key={index}>
                            <Prueba datos={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllFotos
