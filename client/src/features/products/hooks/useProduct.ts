import {useQuery} from "@tanstack/react-query";
import {productsCacheKey} from "../configurations/constants";
import {getProductById} from "../api";
import {Product} from "../configurations/types";

// hook for fetching a single product
export const useProduct = (productId:number) => {
    const {data, ...result} = useQuery({
        queryKey:[productsCacheKey, productId], // ->  we need to pass the productId as a query key because we want to fetch a single product
        queryFn:() => getProductById(productId),
        staleTime:Infinity,
    });
    return {
        product: data as Product || undefined,
        ...result,
    }
}