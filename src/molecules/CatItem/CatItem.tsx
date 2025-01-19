import { FC, useState } from 'react';
import { CatImage } from '@/types/types';
import { LikeButton } from '../../atoms/LikeButton/LikeButton';
import * as classes from './CatItem.module.scss';

interface CatItemProps {
    cat: CatImage;
    className?: string;
    onLike?: (id: string) => void;
}

export const CatItem: FC<CatItemProps> = ({ cat, onLike }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
        onLike?.(cat.id);
    };

    return (
        <div className={classes.catItem}>
            <img 
                src={cat.url} 
                alt="Cat"
                className={classes.image}
                loading="lazy"
            />
            <LikeButton 
                isLiked={isLiked}
                onClick={handleLike}
                className={classes.likeButton}
            />
        </div>
    );
};
