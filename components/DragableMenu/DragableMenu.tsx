'use client'
import React, {useRef} from 'react';
import styles from './DragableMenu.module.scss'
import {motion} from 'framer-motion';

type CareType = {
    name: string
    description: string
    imageBefore: string
    imageAfter: string
}
type PropsType = {
    cares: CareType[]
}
export const DragableMenu = ({cares}: PropsType) => {
    const carousel = useRef(null);
    return (
        <motion.div className={styles.carousel} ref={carousel} whileTap={{cursor: 'grabbing'}}>
            <motion.div drag='x' dragConstraints={carousel} className={styles.innerCarousel}>
            {
                cares.map((care, index) => {
                    return <div className={styles.carouselItem}>
                        <img src={care.imageAfter} alt="service image"/>
                        <div className={styles.carouselItem__info}>
                            <p>{care.name}</p>
                            <button onClick={()=>{alert('clicked:' + index)}} className={styles.carouselItem__button}>Подробнее</button>
                        </div>
                    </div>
                })
            }
            </motion.div>
        </motion.div>
    );
}