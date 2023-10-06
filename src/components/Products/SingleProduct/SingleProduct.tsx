import { FC } from "react"

interface IProps {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
}

const SingleProduct: FC<IProps> = ({ id, title, price, description, category }): JSX.Element => {
    return (
        <div>
            <h3>Title: {title}</h3>
            <ul>
                <li>ID: {id}</li>
                <li>Desc: {description}</li>
                <li>Category: {category}</li>
                <li>Price: ${price}</li>
            </ul>
        </div>
    )
}

export default SingleProduct