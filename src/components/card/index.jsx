import React from 'react';
import './style.css';

const Card = ({ titulo, categoria, precio, unidad, vendedor, descripcion, imagen }) => {
    const ruta = "/assets";

    return (
        <div className="carta" >
            <div className="carta__imagen">
                <img src={`${ruta}/${imagen}`} className="" alt={titulo} />
            </div>
            <div className="carta__informacion">
                <div className="carta__nombre-categoria">
                    <h4>{titulo}</h4>
                    <p>{categoria}</p>
                </div>
                <div className="carta__datos-compra">
                    <p>$ {precio} / {unidad}</p>
                    <p>{vendedor}</p>
                </div>
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