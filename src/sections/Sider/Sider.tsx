import React from 'react';
import cls from './Sider.module.scss';

import Button from '../../components/button/Button';
import { SiderProps } from '../../types';

const Sider: React.FC<SiderProps> = ({ tagsArray, activeTag, setActiveTag }) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!(e.target instanceof HTMLElement)) return;
        setActiveTag(e.target.textContent || '');
        sessionStorage.setItem('activeTag', e.target.textContent || '')
    };

    return (
        <section className={cls.sider}>
            {tagsArray.map((tag: string) => <Button key={tag} active={activeTag === tag} title={tag} onClick={handleClick} />)}
        </section>
    );
};

export default Sider;
