import axios, { AxiosResponse } from "axios";
import { baseURL, rapidAPIoptions as options } from "../constants"
import { IProduct } from "../ts/interface/IProduct";

export const getAllProducts = async(): Promise<IProduct[]> => {
    const { data }: AxiosResponse<IProduct[]> = await axios.get(`${baseURL}/products`, options);

    return data;
};