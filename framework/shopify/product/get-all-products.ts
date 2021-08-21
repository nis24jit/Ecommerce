import { normalizeProduct, getAllProductsQueries} from "../utils";
import {ProductConnection} from "../schema";
import {Product} from "@common/types/product";
import {ApiConfig} from "@common/types/api";

type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
    const {data} = await config.fetch<ReturnType>({url: config.apiUrl, query: getAllProductsQueries});
    // Map is just a pluck operation
    const products = data.products.edges.map(({node: product}) => {
        return normalizeProduct(product)
    }) ?? [];

    return products
};

export default getAllProducts;
