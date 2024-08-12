import { useState, useEffect } from 'react';
import { requestGet } from '../general/get';

const BASE_URL = 'http://localhost:8080/api/v1/agricol';
const ENDPOINT = '/productos';
const PARAMS_PAGE_SIZE = { page: 0, size: 10 };

const useProductos = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [fetched, setFetched] = useState(false); // Nuevo estado para controlar la ejecución

    useEffect(() => {
        debugger
        if (fetched) return;
        console.log('asdf')
        
         // Marca como fetched
        const obtenerProductos = async () => {
            try {
                setFetched(true);
                const data = await requestGet(BASE_URL, ENDPOINT, PARAMS_PAGE_SIZE);
                setProductos(data.content); 
                setLoading(false);
                console.log(data.content);
            } catch (error) {
                console.error('Error al obtener productos:', error);
                setError(error);
                setLoading(false);
            }
        };

        obtenerProductos();
    }, [fetched]); // fetched como dependencia

    return { productos, loading, error };
};

export default useProductos;
