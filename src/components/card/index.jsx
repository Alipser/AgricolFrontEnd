import React from 'react';
import './style.css';

const Card = ({ titulo, categoria, precio, unidad, ubicacion, vendedor, descripcion, imagen }) => {

    return (
        <div className="carta" >
            <div className="carta__imagen">
                <img src={`${imagen}`} className="" alt={titulo} />
            </div>
            <div className="carta__informacion">
                <h4>{titulo}</h4>
                <p>{categoria}</p>
                <p>$ {precio} / {unidad}</p>
                <p>{ubicacion}</p>
                <p><box-icon name='store' flip='horizontal' ></box-icon>{vendedor}</p>
            </div>
            <div className="carta__descripcion">
                <p>{descripcion}</p>
            </div>
            <div className="carta__accion">
                <button>Comprar</button>
            </div>
        </div>
    );
}

export default Card;