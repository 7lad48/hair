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
        <motion.div className={styles.carousel} ref={carousel}>
            <motion.svg
                viewBox="0 0 24 24"
                className={styles.svg}
                initial={{x: 0}}
                animate={{
                    x: [-10, 10, -10]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 5,
                    ease: 'easeInOut',
                }}
            >
                <path
                    d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
                    data-name="Right"/>
            </motion.svg>
            <motion.div drag='x' dragConstraints={carousel} className={styles.innerCarousel}
                        whileTap={{cursor: 'grabbing'}}>
                {
                    cares.map((care, index) => {
                        return <div className={styles.carouselItem}>
                            <img src={care.imageAfter} alt="service image"/>
                            <div className={styles.carouselItem__info}>
                                <p>{care.name}</p>
                                <button onClick={() => {
                                    alert('clicked:' + index)
                                }} className={styles.carouselItem__button}>Подробнее
                                </button>
                            </div>
                        </div>
                    })
                }
            </motion.div>
        </motion.div>
    );
}