import { useQuery } from "@tanstack/react-query"
import { FC } from "react"
import { fetchData } from "../../helpers/fetchData"
import { Loader, Products, Error } from "../../components"
import { IProduct } from "../../ts/interface/IProduct"

const Main: FC = (): JSX.Element => {
    const { data: products, status, error } = useQuery<IProduct[], Error>(["products"], fetchData);

    if (status === "loading") return <Loader />
    if (status === "error") return <Error message={error.message} />

    return <Products products={products} />
}

export default Main