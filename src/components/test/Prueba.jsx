import React, { useState } from 'react'
import './prueba.css'
const Prueba = (props) => {

    const [didLoad, setLoad] = useState(false);

    const style = didLoad ? {} : { visibility: 'hidden' };

    return (
        <div>
            <img
                style={style}
                src={props.datos.nombre_img}
                onLoad={() => setLoad(true)}
                alt=""
            />
        </div>
    );
}

export default Prueba
