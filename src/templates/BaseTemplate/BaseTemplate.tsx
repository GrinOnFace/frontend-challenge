import { FC, ReactNode } from 'react';
import { Header } from '@/organisms/Header/Header';
import * as classes from './BaseTemplate.module.scss';

interface BaseTemplateProps {
    children: ReactNode;
}

export const BaseTemplate: FC<BaseTemplateProps> = ({ children }) => {
    return (
        <div className={classes.template}>
            <Header />
            <main className={classes.main}>{children}</main>
        </div>
    );
};
