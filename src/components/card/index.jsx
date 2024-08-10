import './style.css';
import React from 'react';

const Card = () => {
    const ruta = "/assets";

    return (
        <div className="card carta" style={{ width: '18rem' }}>
            <div className="p-2">
                {/* Descomenta la siguiente línea si necesitas la imagen */}
                <img style={{ height: '150px' }} src={`${ruta}/logo.png` } className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h4 className="card-title carta-titulo">Papa</h4>
                                <span>Categoria</span>
                            </div>
                            <div className="col">
                                <div className="row">
                                    $423.321.123
                                </div>
                                <div className="row">
                                    kg
                                </div>
                                <div className="row">
                                    Perencejo
                                </div>
                            </div>
                        </div>
                        <div className="row card-description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                        </div>
                        <div className="row d-flex justify-content-center">
                            {/* Descomenta la siguiente línea si necesitas el botón */}
                            <a style={{ width: '120px' }} href="#" className="btn btn-light border border-dark">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;