'use client'
import React, {FC, ReactNode} from 'react';
import styles from './Button.module.scss'

type ButtonType = {
    children: ReactNode

}
export const Button: FC<ButtonType> = ({
                                           children,

                                       }) => {
    const onClickHandler = () => {
        alert('Вы нажали кнопку')
    }
    return (
        <button onClick={onClickHandler} className={styles.button}>{children}</button>
    );
}
