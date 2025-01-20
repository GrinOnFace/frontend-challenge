import { FC } from 'react';
import { CircularProgress } from '@mui/material';
import * as classes from './Loader.module.scss';
import { CircularProgressPropsColorOverrides } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { CONSTANTSLOADER } from '@/constants/constants';

export interface LoaderProps {
    size?: number | string;
    thickness?: number;
    color?: OverridableStringUnion<
        'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit',
        CircularProgressPropsColorOverrides
    >;
}

export const Loader: FC<LoaderProps> = ({
    size = CONSTANTSLOADER.size,
    thickness = CONSTANTSLOADER.thickness,
    color = CONSTANTSLOADER.color,
}) => {
    return (
        <div className={classes.loader}>
            <CircularProgress color={color} size={size} thickness={thickness} />
        </div>
    );
};
