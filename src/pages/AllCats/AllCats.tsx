import { FC, useState, useCallback, useEffect } from 'react';
import { Loader } from '@/atoms/Loader/Loader';
import { catApi } from '@/api/catAPI';
import { CatImage } from '@/types/types';
import { CatGrid } from '@/organisms/CatGrid/CatGrid';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { constantsCatAPI } from '@/constants/constants';
import { BaseTemplate } from '@/templates/BaseTemplate/BaseTemplate';

const AllCats: FC = () => {
    const [cats, setCats] = useState<CatImage[]>([]);
    const [page, setPage] = useState(constantsCatAPI.page);
    const [isLoading, setIsLoading] = useState(false);

    const loadMore = useCallback(() => {
        if (isLoading) return;

        setIsLoading(true);

        catApi
            .getCatList({
                page: page + 1,
            })
            .then((newCats) => {
                setCats((prevCats) => [...prevCats, ...newCats]);
                setPage((prev) => prev + 1);
            })
            .catch((err) => {
                console.error(err);
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
                console.error(err);
            });
    }, []);

    useInfiniteScroll({
        callback: loadMore,
        isLoading,
    });

    return (
        <BaseTemplate>
            <CatGrid cats={cats} />
            {isLoading && <Loader />}
        </BaseTemplate>
    );
};

export default AllCats;
