import { FC } from 'react';
import * as classes from './ErrorMessage.module.scss';

export interface ErrorMessageProps {
    message: string;
    className?: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ 
	message, 
	className 
}) => {
    return (
        <div className={`${classes.error} ${className || ''}`}>
            <span className={classes.text}>{message}</span>
        </div>
    );
};
