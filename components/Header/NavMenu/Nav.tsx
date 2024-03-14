'use client'
import React, {FC, useEffect, useState} from 'react';
import styles from './Nav.module.scss'

export type NavItemType = {
    name: string
    href: string
}
type NavigationPropsType = {
    items: NavItemType[]
}
export const Nav:FC<NavigationPropsType> = ({items}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuButtonHandler = () => {
        setOpenMenu(prev => !prev)
    }
    const [activeLink, setActiveLink] = useState('welcome');
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if(element){
            const marginTop = 120;
            const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
            window.scrollTo({top: scrollToY, behavior: 'smooth'});
        }
    }
    const determineActiveSection = () => {
        for(let i = items.length - 1; i >= 0; i--) {
            const section: HTMLElement | null  = document.getElementById(items[i].href);
            if(section){
                const rect = section.getBoundingClientRect();
                if(rect.top <= 140 && rect.bottom >= 140){
                    setActiveLink(items[i].href);
                    break;
                }
            }
        }
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
            determineActiveSection();
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return (
        <nav className={styles.nav}>
            <ul className={`${styles.menuWrapper} ${openMenu && styles.active}`}>
                {items.map( (item: NavItemType) => {
                    const menuItemOnClickHandler = () => {
                        scrollToSection(item.href);
                    }
                    return <li key={item.name} className={styles.navItem} onClick={menuItemOnClickHandler}>
                        <button className={`${styles.navBtn} ${activeLink === item.href ? styles.activeMenuLink : ''}`}>{item.name}</button>
                    </li>
                })}
            </ul>
            <button className={`${styles.menuBtn} ${openMenu && styles.menuBtnActive}`} onClick={menuButtonHandler}><span></span></button>
        </nav>
    );
}