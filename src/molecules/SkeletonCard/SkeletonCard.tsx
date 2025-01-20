import { FC } from 'react';
import * as classes from './SkeletonCard.module.scss';

export const SkeletonCard: FC = () => {
    return (
        <div className={classes.skeleton}>
            <div className={classes.image} />
        </div>
    );
};
