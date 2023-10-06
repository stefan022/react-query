import { FC } from 'react'

import "./LoadMore.scss"

interface IProps {
    handleLoadMore: () => void;
}

const LoadMore: FC<IProps> = ({ handleLoadMore }) => (
    <button 
        onClick={handleLoadMore}
        className="load-more"
    >
        Load more
    </button>
);

export default LoadMore