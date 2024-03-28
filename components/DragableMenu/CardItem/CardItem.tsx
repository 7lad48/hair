import React from 'react';
import styles from "@/components/DragableMenu/DragableMenu.module.scss";
import {CareType} from "@/components/DragableMenu/DragableMenu";

export const CardItem = (care: CareType) => {
    return (
        <>
        <div className={styles.carouselItem}>
            <img src={care.imageAfter} alt="service image"/>
            <div className={styles.carouselItem__info}>
                <p>{care.name}</p>
                <button onClick={() => {
                    alert('clicked:' + care.description)
                }} className={styles.carouselItem__button}>Подробнее
                </button>
            </div>
        </div>
    </>
    );
}
