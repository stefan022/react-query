import { FC } from 'react'
import { useIsFetching } from '@tanstack/react-query'
import { Loader } from '..';

const GlobalLoadingIndicator: FC = (): JSX.Element | null => {
    const isFetching = useIsFetching();

    return isFetching 
                ? <Loader />
                : null
}

export default GlobalLoadingIndicator