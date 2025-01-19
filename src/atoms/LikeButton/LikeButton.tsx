import { FC } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as classes from './LikeButton.module.scss';
import { LikeButtonProps } from './types';

export const LikeButton: FC<LikeButtonProps> = ({ isLiked, onClick, className }) => {
    return (
        <button 
            className={`${classes.likeButton} ${className || ''}`}
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            aria-label="like"
        >
            {isLiked ? (
                <FavoriteIcon className={classes.icon} />
            ) : (
                <FavoriteBorderIcon className={classes.icon} />
            )}
        </button>
    );
}; 