import { FC } from 'react';
import { CircularProgress, CircularProgressPropsColorOverrides } from '@mui/material';
import * as classes from './Loader.module.scss';
import { OverridableStringUnion } from '@mui/types'

interface LoaderProps {
	size?: number | string;
	thickness?: number;
	color?: OverridableStringUnion<'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit', CircularProgressPropsColorOverrides>;
}

export const Loader: FC<LoaderProps> = ({ 
    size = 60,
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