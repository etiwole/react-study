import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const {
        to,
        children,
        className,
        theme= AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {[styles[theme]]: true}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};