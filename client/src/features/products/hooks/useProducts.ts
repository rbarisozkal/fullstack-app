import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api";
import {productsCacheKey} from "../configurations/constants";
import {Product} from "../configurations/types";

/** hook for fetching all products */
export const useProducts = () => {
    const { data, ...result } = useQuery({
        queryKey: [productsCacheKey],
        queryFn: () => getProducts(),
        staleTime: Infinity,
    });

    return {
        products: data as Product[] || [],
        ...result,
    };
};
