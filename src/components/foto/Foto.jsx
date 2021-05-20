import React, { useState } from 'react';
import './foto.css';
const Foto = (props) => {

    const [didLoad, setLoad] = useState(false);

    const style = didLoad ? {} : { visibility: 'hidden' };

    return (
        <div>
            <img
                className={props.datos.formato === "vertical" ? "vertical" : "horizontal"}
                style={style}
                src={props.datos.nombre_img}
                onLoad={() => setLoad(true)}
                alt=""
            />
        </div>
    );
}

export default Foto;
