import { baseURL } from "../constants"

export const fetchData = async() => {
    return (await fetch(`${baseURL}/products`)).json();
};