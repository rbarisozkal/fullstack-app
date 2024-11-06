import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api";
import {productsCacheKey} from "../configurations/constants";
/** our own custom hook for fetching all products */
export const useProducts = () => {
    const { data, ...result } = useQuery({
        queryKey: [productsCacheKey],
        queryFn: () => getProducts(),
        staleTime: Infinity,
    });

    return {
        products: data || [],
        ...result,
    };
};
