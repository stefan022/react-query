import { FC, useState } from 'react'
import { IProduct } from '../../ts/interface/IProduct';
import SingleProduct from './SingleProduct/SingleProduct';
import { LoadMore } from '..';

interface IProps {
    products: IProduct[];
}

const Products: FC<IProps> = ({ products }): JSX.Element => {
    const [visibleProducts, setVisibleProducts] = useState<number>(5);

    const handleLoadMore = () => setVisibleProducts(vp => vp + 5);

    return (
        <>
        {
            products.length > 0 && (
            <>
                <h1>Products Info</h1>
                {
                    products
                        .slice(0, visibleProducts)
                        .map((product: IProduct) => {
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
                {
                    visibleProducts < products.length && <LoadMore handleLoadMore={handleLoadMore}/>
                }
            </>
            )
        }
        </>
    )
}

export default Products