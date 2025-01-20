import { FC, useState, useCallback, useEffect } from 'react';
import { Loader } from '@/atoms/Loader/Loader';
import { catApi } from '@/api/catAPI';
import { CatImage } from '@/types/types';
import { CatGrid } from '@/organisms/CatGrid/CatGrid';
import { Header } from '@/organisms/Header/Header';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { constantsCatAPI } from '@/constants/constants';
import { ErrorMessage } from '@/atoms/ErrorMessage/ErrorMessage';

const AllCats: FC = () => {
    const [cats, setCats] = useState<CatImage[]>([]);
    const [page, setPage] = useState(constantsCatAPI.page);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const loadMore = useCallback(() => {
        if (isLoading) return;

        setIsLoading(true);
        setError(null);

        catApi
            .getCatList({
                page: page + 1,
            })
            .then((newCats) => {
                setCats((prevCats) => [...prevCats, ...newCats]);
                setPage((prev) => prev + 1);
            })
            .catch((err) => {
                setError(err instanceof Error ? err : new Error('Ошибка загрузки котиков'));
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [page, isLoading]);

    useEffect(() => {
        catApi
            .getCatList({
                page: constantsCatAPI.page,
            })
            .then((initialCats) => {
                setCats(initialCats);
            })
            .catch((err) => {
                setError(err instanceof Error ? err : new Error('Failed to fetch cats'));
            });
    }, []);

    useInfiniteScroll({
        callback: loadMore,
        isLoading,
    });

    if (error)
        return (
            <>
                <Header />
                <ErrorMessage message={error?.message} />
            </>
        );

    return (
        <>
            <Header />
            <CatGrid cats={cats} />
            {isLoading && <Loader />}
        </>
    );
};

export default AllCats;
