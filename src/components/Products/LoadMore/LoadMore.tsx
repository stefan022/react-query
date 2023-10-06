import { FC } from 'react'

interface IProps {
    handleLoadMore: () => void;
}

const LoadMore: FC<IProps> = ({ handleLoadMore }) => (
    <button 
        onClick={handleLoadMore}
        className="button"
    >
        Load more
    </button>
);

export default LoadMore