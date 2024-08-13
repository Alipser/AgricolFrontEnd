export const BASE_URL = 'http://localhost:8080/api/v1/agricol';
export const ENDPOINT = '/productos';
export const PARAMS_PAGE_SIZE = { page: 0, size: 10 };

export const requestGet = async (baseUrl, endpoint, params) => {
    const url = `${baseUrl}${endpoint}?${new URLSearchParams(params).toString()}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (err) {
        console.error('Fetch error:', err.message);
        throw err;
    }
};