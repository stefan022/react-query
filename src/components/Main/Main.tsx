import { useQuery } from "@tanstack/react-query"
import { FC } from "react"
import { fetchData } from "../../helpers/fetchData"
import { Products } from "../../components"

const Main: FC = (): JSX.Element => {
    const { data: products } = useQuery({ queryKey: ["products"], queryFn: fetchData })

    return (
        <>
            {
                products 
                    ? <Products products={products} />
                    : <p>Loading...</p>
            }
        </>
    )
}

export default Main