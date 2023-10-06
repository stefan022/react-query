import { baseURL } from "../constants"
import { IProduct } from "../ts/interface/IProduct";

export const fetchData = async(): Promise<IProduct[]> => {
    return (await fetch(`${baseURL}/products`)).json();
};