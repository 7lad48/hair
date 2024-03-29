import React from 'react';
import {ServicesNavigation} from "@/components/Services/ServicesNavigation";
import styles from './Services.module.scss'

const services = [
    {name: 'Уход', route: '/'},
    {name: 'Пилинг', route: '/service1'},
    {name: 'Консультация', route: '/service2'},
    // {name: 'Сервис 3', route: '/service3'},
    // {name: 'Сервис 4', route: '/service4'}
]
export const Services = () => {
    return (
        <section id={'services'} className={`wrapper ${styles.services}`}>
            <h3 className={'title'}>Услуги</h3>
            <ServicesNavigation services={services}/>
        </section>
    );
}