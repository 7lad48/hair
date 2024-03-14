import React from 'react';
import styles from './Header.module.scss'

function Logo() {
    return (
        <div className={styles.logo}>
        <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
            <g className="layer">
                <title>VH</title>
                <text /*fill="#ffffff"*/ fontFamily="serif" fontSize="48" textAnchor="middle" x="20" y="45" style={{ cursor: 'default', userSelect: 'none' }}>
                    V
                </text>
                <text /*fill="#ffffff"*/ fontFamily="serif" fontSize="50" textAnchor="middle" x="44" y="46" style={{ cursor: 'default', userSelect: 'none' }}>
                    H
                </text>
            </g>
        </svg>
        </div>
    );
}

export default Logo;