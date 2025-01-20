import { CLIENTHEIGHTOFFSET } from '@/constants/constants';
import { useEffect } from 'react';

interface UseInfiniteScrollProps {
    callback: () => void;
    isLoading: boolean;
}

export const useInfiniteScroll = ({ callback, isLoading }: UseInfiniteScrollProps): void => {
	// Хук для бесконечной прокрутки
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;

			// Проверка на достижение конца страницы и вызов callback при необходимости
            if (!isLoading && scrollHeight - scrollTop <= clientHeight + CLIENTHEIGHTOFFSET) {
                callback();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [callback, isLoading]);
};
