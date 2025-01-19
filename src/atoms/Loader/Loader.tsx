import { FC } from 'react';
import { CircularProgress } from '@mui/material';
import * as classes from './Loader.module.scss';
import { LoaderProps } from './types';

export const Loader: FC<LoaderProps> = ({
    size = 50,
    thickness = 3,
    color = 'primary'
}) => {
    return (
        <div className={classes.loader}>
            <CircularProgress 
                color={color}
                size={size}
                thickness={thickness}
            />
        </div>
    );
}; 