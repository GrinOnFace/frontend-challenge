import { FC, useState, useCallback, useEffect } from 'react';
import { catApi } from '@/api/catAPI';
import { CatImage } from '@/types/types';
import { CatGrid } from '@/organisms/CatGrid/CatGrid';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { CONSTANTSAPICAT } from '@/constants/constants';
import { BaseTemplate } from '@/templates/BaseTemplate/BaseTemplate';
import { SkeletonGrid } from '@/organisms/SkeletonGrid/SkeletonGrid';

const AllCats: FC = () => {
    const [cats, setCats] = useState<CatImage[]>([]);
    const [page, setPage] = useState(CONSTANTSAPICAT.page);
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
                page: CONSTANTSAPICAT.page,
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
            <CatGrid cats={cats} status={true} />
            {isLoading && <SkeletonGrid />}
        </BaseTemplate>
    );
};

export default AllCats;
