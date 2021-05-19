import React from 'react';
import './allfotos.css'
import imagen from '../../img/unnamed_1.jpg'


const AllFotos = () => {
    const datos = require('../../data.json');

    return (
        <div>
            <h1>Todas las fotos</h1>
            {
                datos.map((item, index) => (
                 <div key={index}>
                     <img src={imagen} alt="" />
                     <img src={item.nombre_img} alt="" />
                     <h2>{item.nombre_img}</h2>
                     <h2>{item.iso}</h2>
                     <h2>{item.f}</h2>
                     <h2>{item.velocidad}</h2>
                     <h2>{item.distancia_focal}</h2>
                     <h2>{item.fecha_captura}</h2>
                     <h2>{item.distancia_focal}</h2>
                 </div>   
                ))
            }
        </div>
    )
}

export default AllFotos
