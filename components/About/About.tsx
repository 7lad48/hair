import React from 'react';
import styles from './About.module.scss'
import Photo from "@/assets/images/About/vPhoto.jpg";
import Image from "next/image";

const about = {
    intro: 'Рада всех приветствовать 🥰',
    aboutMe: 'Меня зовут Виктория,  я - ЭСТЕТ-реабилитолог !',
    working: 'Занимаюсь проблемами кожи головы и волос! Провожу процедуры УХОД ДЛЯ ВОЛОС (❌НЕ КЕРАТИН) только на органических составах процедуры ПИЛИНГА , консультации по подбору ухода (ОНЛАЙН ) и офлайн.',
    working2: 'Так же с 2017 г работаю с клиентами в сфере СВАДЕБНАЯ / ВЕЧЕРНЯЯ причёски и провожу обучение:',
    course: '✅ Курс «Причёски для себя»',
    course2: {
        name: '✅ Обучение причёскам индивидуально',
        description: '( базовый курс, 2-х дневный экспресс-курс для визажистов).'
    }
}
export const About = () => {
    return (
        <section className={'wrapper'}>
            <h3 className={`title ${styles.title}`}>Знакомство</h3>
            <div className={styles.content}>
                <div className={styles.picture}>
                    <Image
                        src={Photo}
                        alt={'фото'}
                        height={240}
                    />
                </div>
                <div className={styles.info}>
                    <p className={styles.info__intro}>{about.intro}</p>
                    <p className={styles.info__aboutMe}>{about.aboutMe}</p>
                    <p className={styles.info__working}>{about.working}</p>
                    <p className={styles.info__working2}>{about.working2}</p>
                    <p className={styles.info__course}>{about.course}</p>
                    <div className={styles.info__course2}>
                        <p>{about.course2.name}</p>
                        <p className={styles.info__course2Descr}>{about.course2.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
