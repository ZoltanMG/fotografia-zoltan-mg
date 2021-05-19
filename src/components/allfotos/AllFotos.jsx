import React from 'react';
import './allfotos.css'
import Prueba from '../test/Prueba'


const AllFotos = () => {
    const datos = require('../../data.json');

    return (
        <div>
            <h1>Todas las fotos</h1>
            {
                datos.map((item, index) => (
                 <div key={index}>
                     <Prueba datos={item}/>
                 </div>   
                ))
            }
        </div>
    )
}

export default AllFotos
