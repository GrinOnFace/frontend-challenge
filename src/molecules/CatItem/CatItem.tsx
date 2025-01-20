import { FC } from 'react';
import { LikeButton } from '@/atoms/LikeButton/LikeButton';
import * as classes from './CatItem.module.scss';
import { CatImage } from '@/types/types';

export interface CatItemProps {
    cat: CatImage;
    isLiked: boolean;
    onLike: (cat: CatImage) => void;
}

export const CatItem: FC<CatItemProps> = ({ cat, isLiked, onLike }) => {
    const handleLike = () => {
        onLike(cat);
    };

    return (
        <li className={classes.catItem}>
            <img src={cat.url} alt='Cat' className={classes.image} loading='lazy' />
            <LikeButton isLiked={isLiked} onClick={handleLike} className={classes.likeButton} />
        </li>
    );
};
