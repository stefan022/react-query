import { FC } from 'react'

interface IProps {
    message: string;
}

const Error: FC<IProps> = ({ message }): JSX.Element => <p>Error: {message}</p>;

export default Error