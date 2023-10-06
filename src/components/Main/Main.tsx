import { useQuery } from "@tanstack/react-query"
import { FC } from "react"
import { getAllProducts } from "../../helpers/getAllProducts"
import { Products, Error, AddSingleProduct } from "../../components"
import { IProduct } from "../../ts/interface/IProduct"
import { useQueryOptions as options } from "../../constants"

const Main: FC = (): JSX.Element => {
    const { data: products, status, error } = useQuery<IProduct[], Error>(["products"], getAllProducts, options);

    if (status === "error") return <Error message={error.message} />

    return (
        <>
            <AddSingleProduct />
            <Products products={products} />
        </>
    )
}

export default Main