import { useState } from 'react'
import Link from 'next/link'

import styles from './navbar.module.css'


const Navbar = () => {

    const [burgerMenuState, setBurgerMenuState] = useState(false);

    const toggleMenu = (e) => {
        e.preventDefault()  
        setBurgerMenuState(!burgerMenuState)
    }

    return (
        <header className={styles.header}>
            <div className={styles.breadcrumb}>
                
            </div>

            <button 
                onClick={toggleMenu} 
                className={ burgerMenuState ? [styles.burgerMenu, styles.active].join(' ') : styles.burgerMenu}
            >
                <svg viewBox="0 0 64 48">
                    <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                    <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                    <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
                </svg>
            </button>

            <nav className={ burgerMenuState ? [styles.sidenav, styles.nav, styles.active].join(' ') : [styles.sidenav, styles.nav].join(' ')}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/work">
                    <a>Work</a>
                </Link>
                <Link href="/certificates">
                    <a>Certificates</a>
                </Link>
                <Link href="/articles">
                    <a>Articles</a>
                </Link>
            </nav>
            <div className={ burgerMenuState ? [styles.sidenavOverlay, styles.active].join(' '): styles.sidenavOverlay}></div>
        </header>
    )
}

export default Navbar