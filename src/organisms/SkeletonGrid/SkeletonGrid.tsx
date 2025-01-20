import { FC } from 'react';
import { SkeletonCard } from '@/molecules/SkeletonCard/SkeletonCard';
import * as classes from './SkeletonGrid.module.scss';
import { CONSTANTSAPICAT } from '@/constants/constants';

interface SkeletonGridProps {
    count?: number;
    className?: string;
}

export const SkeletonGrid: FC<SkeletonGridProps> = ({ 
    count = CONSTANTSAPICAT.limit,
    className 
}) => {
    return (
        <div className={`${classes.grid} ${className || ''}`}>
            {Array.from({ length: count }).map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    );
};