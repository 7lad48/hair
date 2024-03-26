'use client'
import React, {FC} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from './Services.module.scss'

export type ServicesItemType = {
    name: string
    route: string
}
type ServicesPropsType = {
    services: ServicesItemType[]
}
export const ServicesNavigation:FC<ServicesPropsType> = (props) => {
    const {
        services,
    } = props
    const pathname = usePathname()
    return (
        <nav className={styles.navigation}>
            <div className={styles.navigationWrapper}>
            {services.map(service => {
                const isActive = pathname === service.route || pathname.startsWith(`${service.route}/`)
                return <Link key={service.name} href={service.route}
                             className={`${styles.link} ${isActive ? `${styles.active}` : ''}`}>{service.name}</Link>
            })}
            </div>
        </nav>
    );
}