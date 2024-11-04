import axiosInstance from "../../../config/axiosConfig";

export const getProducts = async () => {
    const response = await axiosInstance.get('/products');
    return response.data;
};

export const fetchProductById = async (id: string) => {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
};