import React from 'react';
import './allfotos.css'
import Foto from '../foto/Foto'

const AllFotos = () => {
    const datos = require('../../data.json');

    return (
        <div>
            <div className="content-all-fotos">
                {
                    datos.map((item, index) => (
                        <div key={index}>
                            <Foto datos={item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllFotos
