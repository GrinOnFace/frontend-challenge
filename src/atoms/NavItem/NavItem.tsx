import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import * as classes from './NavItem.module.scss';

export interface NavItemProps {
    to: string;
    children: React.ReactNode;
}

export const NavItem: FC<NavItemProps> = ({ 
	to, 
	children 
}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ''}`}
        >
            {children}
        </NavLink>
    );
};
