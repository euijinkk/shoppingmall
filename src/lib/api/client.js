import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:4000',
});

export const getProductData = async () => {
    try {
        const data = await client.get('/posts');
        console.log('[SUCCESS] GET card data');
        return data.data.data;
    } catch (e) {
        console.log('[FAIL] GET card data');
        return null;
    }
}

export const createProductData = async (productData) => {
    try {
        const data = await client.post('/posts', {
            data: productData,
        });
        console.log('[SUCCESS] POST card data');
        return data.data.data;
    } catch (e) {
        console.log('[FAIL] POST card data');
        return null;
    }
};
