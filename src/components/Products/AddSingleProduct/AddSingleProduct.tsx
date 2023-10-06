import { FC } from 'react'
import { addSingleProduct } from '../../../helpers/addSingleProduct';
import { useMutation } from '@tanstack/react-query';
import { IAddProduct } from '../../../ts/interface/IAddProduct';
import { useMutationOptions as options } from '../../../constants/useMutationOptions/useMutationOptions';

const dto = {
    title: "New Title", 
    price: 100, 
    category: "man", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellendus!"
}

const AddSingleProduct: FC = (): JSX.Element => {
    const mutation = useMutation((dto: IAddProduct) => addSingleProduct(dto), options);

    const handleAddSingleProduct = () => mutation.mutate(dto);

    return (
        <button
            onClick={handleAddSingleProduct}
            className="button"
        >
            Add a Product
        </button>
    )
}

export default AddSingleProduct