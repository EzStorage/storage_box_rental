import { PRODUCTS } from "src/constants/product.constants";
import { GetProductByIdPayload } from "src/types/product.type";

export const getProductById = async (id: string): Promise<GetProductByIdPayload> => {
    const data = PRODUCTS[0];

    if (data !== null) {
        return {
            data: data,
        };
    }
    throw {
        response: {
            status: 404,
            data: {
                message: "Not found",
            },
        },
    };
};
