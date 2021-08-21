import {
    Product as ShopifyProduct
} from "../schema";

export function normalizeProduct(productNode: ShopifyProduct): any{
    const {id, title:name, handle,vendor,description} = productNode;
}
