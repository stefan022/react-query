import axios, { AxiosResponse } from "axios";
import { baseURL, rapidAPIoptions as options } from "../constants"
import { IAddProduct } from "../ts/interface/IAddProduct";

export const addSingleProduct = (dto: IAddProduct): Promise<AxiosResponse> => {
    const response: Promise<AxiosResponse> = axios.post(`${baseURL}/products`, dto, options);

    return response;
};