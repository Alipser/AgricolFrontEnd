// src/hooks/useProductos.js
import { useState, useEffect } from 'react';
const BASE_URL = 'http://localhost:8080/api/v1/agricol';
import { requestGet } from '../general/get';
const ENDPOINT = '/productos';
const PARAMS_PAGE_SIZE = { page: 0, size: 10 };

const useProductos = () => {
    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
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
    }, []);

    return { productos, loading, error };
};

export default useProductos;
