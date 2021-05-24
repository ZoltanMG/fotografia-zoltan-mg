import React, {useState} from 'react'
import './foto.css'

const Foto = (props) => {
    const [didLoad, setLoad] = useState(false);


    const style = didLoad ? {} : { display: 'none' };
    let styleBack = {}
    didLoad ? (styleBack = { display: 'none' }) : (styleBack = {})
    const abrirFoto = (datos) => {
        alert(datos.nombre_img)
    }
    return (
        <div>
            <div
                className={props.datos.formato === 'vertical' ? 'img_loading_v' : 'img_loading_h'}
                style={styleBack}
            ></div>
            <img
                className={props.datos.formato === "vertical" ? "vertical" : "horizontal"}
                style={style}
                onClick={() => abrirFoto(props.datos)}
                src={props.datos.nombre_img}
                onLoad={() => setLoad(true)}
                alt=""
            />
        </div>
    )
}

export default Foto
