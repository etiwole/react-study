import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>
                toggle
            </button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                {/*  LangSwitcher  */}
            </div>
        </div>
    );
};