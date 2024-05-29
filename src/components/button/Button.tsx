import React from 'react';
import cls from './Button.module.scss';

import { ButtonProps } from '../../types';

const Button = ({ active = false, title, onClick }: ButtonProps) => {
    const buttonClassName = `${cls.siderBtn} ${active ? cls.active : ''}`;
    return (
        <button className={buttonClassName} onClick={onClick}>{title}</button>
    )
}

export default Button;