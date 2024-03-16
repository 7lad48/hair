import React from 'react';
import {ServicesNavigation} from "@/components/Services/ServicesNavigation";


const services = [
    {name: 'Пилинг', route: '/'},
    {name: 'Сервис 1', route: '/service1'},
    {name: 'Сервис 2', route: '/service2'},
    {name: 'Сервис 3', route: '/service3'},
    {name: 'Сервис 4', route: '/service4'}
]
export const Services = () => {
    return (
        <section id={'services'}>
            <ServicesNavigation services={services}/>
        </section>
    );
}
