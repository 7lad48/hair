import React from 'react';
import {Nav} from "@/components/Header/NavMenu/Nav";
import styles from './Header.module.scss'
import Logo from "@/components/Header/Logo";

const navItems = [
    {name: 'About me', href: 'about'},
    {name: 'Features', href: 'features'},
    {name: 'Price', href: 'price'},
    {name: 'Testimonials', href: 'testimonials'},
    {name: 'Contact', href: 'contact'},
]
export const Header = (props: any) => {
    return (
        <header className={styles.header}>
            <div className={`wrapper ${styles.headerWrapper}`}>
                <Logo/>
                <Nav items={navItems}/>
            </div>
        </header>
    );
}