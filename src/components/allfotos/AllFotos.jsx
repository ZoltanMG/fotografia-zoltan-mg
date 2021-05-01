import React from 'react';
import './allfotos.css'


const AllFotos = () => {
    const datos = require('../../data.json');

    return (
        <div>
            <h1>Todas las fotos</h1>
            {
                datos.map((item, index) => (
                 <div key={index}>
                     {/* src\img\IMG_5191.JPG */}
                     <img src={item.nombre} alt=""/>
                     <h2>{item.nombre}</h2>
                     <h2>{item.iso}</h2>
                 </div>   
                ))
            }
        </div>
    )
}

export default AllFotos
