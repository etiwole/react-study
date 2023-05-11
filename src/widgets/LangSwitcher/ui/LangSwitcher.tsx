import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./LangSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({className}) => {
    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage('ru' === i18n.language ? 'en' : 'ru');
    }

    return (
        <Button
            className={classNames(styles.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
};
