import React from 'react';
import styles from './Welcome.module.scss';
import Image from "next/image";
import Photo from '../../assets/images/Welcome/welcomePicture.png'
import { Button } from '../Button/Button';
const welcomeData = {
    title: 'Уход для волос',
    subtitle: 'Индивидуальный подбор',
    buttonTitle: 'Кнопка',
}
export const Welcome = () => {
    return (
        <section id={'welcome'} className={styles.welcome}>
            <div className={`${styles.welcome_contentWrapper} wrapper`}>
                <div className={styles.welcome__info}>
                    <p className={styles.welcome__infoTitle}>{welcomeData.title}</p>
                    <p className={styles.welcome__infoSubtitle}>{welcomeData.subtitle}</p>
                    <Button>{welcomeData.buttonTitle}</Button>
                </div>
                <div className={styles.welcome__picture}>
                    <Image
                        src={Photo}
                        alt={'фото'}
                        height={630}
                        quality={100}
                    />
                </div>
            </div>
        </section>
    );
}