import axiosInstance from "../../../config/axiosConfig";
import {Product} from "../configurations/types";

export const getProducts = async () => {
    const response = await axiosInstance.get('/products');
    return response.data as Product[];
};

export const getProductById = async (id: number) => {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data as Product;
};