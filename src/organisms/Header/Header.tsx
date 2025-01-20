import { FC } from 'react';
import { Navigation } from '@/molecules/Navigation/Navigation';
import * as classes from './Header.module.scss';

export const Header: FC = () => {
    return (
        <header className={classes.header}>
            <Navigation />
        </header>
    );
};
