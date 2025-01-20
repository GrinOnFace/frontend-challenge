import { FC, useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as classes from './LikeButton.module.scss';

export interface LikeButtonProps {
    isLiked: boolean;
    onClick: () => void;
    className?: string;
}

export const LikeButton: FC<LikeButtonProps> = ({ isLiked, onClick, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`${classes.likeButton} ${className || ''}`}
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label='like'
            data-like={isLiked}
        >
            {isLiked || isHovered ? (
                <FavoriteIcon className={classes.icon} />
            ) : (
                <FavoriteBorderIcon className={classes.icon} />
            )}
        </button>
    );
};
