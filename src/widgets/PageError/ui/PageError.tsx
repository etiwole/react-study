import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

export const PageError: React.FC = () => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(styles.PageError, {}, [])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage} theme={ButtonTheme.CLEAR}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
