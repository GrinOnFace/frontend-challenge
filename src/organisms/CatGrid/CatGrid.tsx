import { FC } from 'react';
import { CatItem } from '@/molecules/CatItem/CatItem';
import { CatImage } from '@/types/types';
import * as classes from './CatGrid.module.scss';

interface CatGridProps {
    cats: CatImage[];
    onLike?: (id: string) => void;
    className?: string;
}

export const CatGrid: FC<CatGridProps> = ({ cats, onLike, className }) => {
    return (
        <div className={`${classes.grid} ${className || ''}`}>
            {cats.map((cat) => (
                <CatItem
                    key={cat.id}
                    cat={cat}
                    onLike={onLike}
                />
            ))}
        </div>
    );
};
