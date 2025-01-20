import { FC, useCallback, useState } from 'react';
import { CatItem } from '@/molecules/CatItem/CatItem';
import { CatImage } from '@/types/types';
import { useFavorites } from '@/hooks/useFavorites';
import * as classes from './CatGrid.module.scss';

interface CatGridProps {
    cats: CatImage[];
    className?: string;
    status: boolean;
}

export const CatGrid: FC<CatGridProps> = ({ cats, className, status }) => {
    const { isLiked, toggleFavorite } = useFavorites();
    const [localCats, setLocalCats] = useState<CatImage[]>(cats);

    const handleToggleFavorite = useCallback(
        (cat: CatImage) => {
            toggleFavorite(cat);
            setLocalCats((prev) => prev.filter((c) => c.id !== cat.id));
        },
        [toggleFavorite],
    );

    return (
        <ul className={`${classes.grid} ${className || ''}`}>
            {status
                ? cats.map((cat) => (
                      <CatItem
                          key={cat.id}
                          cat={cat}
                          isLiked={isLiked(cat.id)}
                          onLike={() => handleToggleFavorite(cat)}
                      />
                  ))
                : localCats.length > 0
                  ? localCats.map((cat) => (
                        <CatItem
                            key={cat.id}
                            cat={cat}
                            isLiked={isLiked(cat.id)}
                            onLike={() => handleToggleFavorite(cat)}
                        />
                    ))
                  : null}
        </ul>
    );
};
