'use client'
import React, {FC, ReactNode} from 'react';
import styles from './Button.module.scss'
import {sendMessage} from "@/api/telegram";

type ButtonType = {
    children: ReactNode

}
export const Button: FC<ButtonType> = ({
                                           children,

                                       }) => {
    const onClickHandler = () => {
        //alert('Вы нажали кнопку')
        sendMessage('lalalal').then(() => alert('done')).catch(e=>alert('error: '+e)).finally(()=>console.log('finally'))
    }
    return (
        <button onClick={onClickHandler} className={styles.button}>{children}</button>
    );
}
