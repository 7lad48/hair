'use client'
import React, {useRef} from 'react';
import styles from './DragableMenu.module.scss'
import {motion} from 'framer-motion';

type CareType = {
    name: string
    description: string
}
type PropsType = {
    cares: CareType[]
}
export const DragableMenu = ({cares}: PropsType) => {
    const carousel = useRef(null);
    return (
        <motion.div className={styles.carousel} ref={carousel}>
            <motion.div drag='x' dragConstraints={carousel} className={styles.innerCarousel}>
            {
                cares.map((care, index) => {
                    return <div className={styles.carouselItem}>
                        {care.name}
                        <button onClick={()=>{alert('clicked:' + index)}}>Click me</button>
                    </div>
                })
            }
            </motion.div>
        </motion.div>
    );
}