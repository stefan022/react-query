import { FC } from 'react'
import { IProduct } from '../../ts/interface/IProduct';
import SingleProduct from './SingleProduct/SingleProduct';

interface IProps {
    products: IProduct[];
}

const Products: FC<IProps> = ({ products }): JSX.Element => {
    return (
        <>
        {
            products.length > 0 ? (
            <>
                <h1>Products Info</h1>
                {
                    products.map((product: IProduct) => {
                        const { id, title, price, description, category } = product;
                        return (
                            <SingleProduct
                                key={id}
                                id={id}
                                title={title}
                                price={price}
                                description={description}
                                category={category}
                            />
                        )
                    })
                }
            </>
            ) : <p>Loading...</p>
        }
        </>
    )
}

export default Products