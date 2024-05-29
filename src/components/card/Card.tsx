import React from 'react';
import cls from './Card.module.scss'
import { CardProps } from '../../types';

export const Card: React.FC<CardProps> = ({ name, image, bgColor }) => {
    return (
        <div className={cls.card}>
            <figure className={cls.imageWrapper} style={{ backgroundColor: bgColor }}>
                <img src={image} alt={name} className={cls.cardImage} />
            </figure>
            <p className={cls.title}>{name}</p>
        </div>
    )
}
