import { FC } from 'react';
import { NavItem } from '@/atoms/NavItem/NavItem';
import * as classes from './Navigation.module.scss';

export const Navigation: FC = () => {
    return (
        <nav className={classes.nav}>
            <NavItem to='/'>Все котики</NavItem>
            <NavItem to='/likes'>Любимые котики</NavItem>
        </nav>
    );
};
