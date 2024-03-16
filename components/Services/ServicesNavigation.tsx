'use client'
import React, {FC} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

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
        <nav>
            {services.map(service => {
                const isActive = pathname === service.route || pathname.startsWith(`${service.route}/`)
                return <Link key={service.name} href={service.route}
                             className={`link ${isActive ? 'active' : ''}`}>{service.name}</Link>
            })}
        </nav>
    );
}