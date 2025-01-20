import { FC } from 'react';
import { CatItem } from '@/molecules/CatItem/CatItem';
import { CatImage } from '@/types/types';
import { useFavorites } from '@/hooks/useFavorites';
import * as classes from './CatGrid.module.scss';

interface CatGridProps {
    cats: CatImage[];
    className?: string;
}

export const CatGrid: FC<CatGridProps> = ({ cats, className }) => {
    const { isLiked, toggleFavorite } = useFavorites();

    return (
        <ul className={`${classes.grid} ${className || ''}`}>
            {cats.map((cat) => (
                <CatItem key={cat.id} cat={cat} isLiked={isLiked(cat.id)} onLike={toggleFavorite} />
            ))}
        </ul>
    );
};
