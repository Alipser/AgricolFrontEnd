import React from "react";
import Layout from "../../components/layout";
import Card from "../../components/card";
import useProductos from "../conector/comprador/mainHook"; // Usa un custom hook para obtener productos
import './style.css';

const Comprador = () => {
    debugger
    const { productos, loading, error } = useProductos(); // Usa el custom hook

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error al obtener productos: {error.message}</div>;

    const cards = [];
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        cards.push(
            <Card 
                key={i}
                titulo={producto.nombreProducto}
                categoria={producto.clasificacion}
                precio={producto.precio}
                unidad={producto.unid.nombre}
                ubicacion={producto.localizacion}
                vendedor={producto.vendedor.nombre + ' ' + producto.vendedor.apellido}
                descripcion={producto.descripcion}
                imagen={producto.imagenUrl}
            />
        );
    }

    return (
        <Layout>
            <div className="publicacion__container">
                {cards}
            </div>
        </Layout>
    );
}

export default Comprador;


