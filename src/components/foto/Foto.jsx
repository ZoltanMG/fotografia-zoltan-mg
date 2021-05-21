import React, { useState } from 'react';
import './foto.css';
const Foto = (props) => {

    const [didLoad, setLoad] = useState(false);

    const style = didLoad ? {} : { display: 'none' };
    let styleBack = {}
    didLoad ? (styleBack = { display: 'none' }) : (styleBack = {})

    return (
        <>
            <div
                className={props.datos.formato === 'vertical' ? 'img_loading_v' : 'img_loading_h'}
                style={styleBack}
            ></div>
            <img
                className={props.datos.formato === "vertical" ? "vertical" : "horizontal"}
                style={style}
                src={props.datos.nombre_img}
                onLoad={() => setLoad(true)}
                alt=""
            />
        </>
    );
}

export default Foto;
