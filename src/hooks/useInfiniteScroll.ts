import { CLIENTHEIGHTOFFSET } from '@/constants/constants';
import { useEffect } from 'react';

interface UseInfiniteScrollProps {
    callback: () => void;
    isLoading: boolean;
}

export const useInfiniteScroll = ({ callback, isLoading }: UseInfiniteScrollProps): void => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;

            if (!isLoading && scrollHeight - scrollTop <= clientHeight + CLIENTHEIGHTOFFSET) {
                callback();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [callback, isLoading]);
};
