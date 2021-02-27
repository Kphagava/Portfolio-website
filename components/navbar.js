import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import ActiveLink from './activeLink';
import styles from './navbar.module.css'


const Navbar = () => {

    const router = useRouter()
    const currentPath = router.pathname.substr(1);

    const [burgerMenuState, setBurgerMenuState] = useState(false);

    const toggleMenu = (e) => {
        e.preventDefault()  
        setBurgerMenuState(!burgerMenuState)
    }

    return (
        <header className={styles.header}>
            <div className={styles.breadcrumb}>
                {   
                    currentPath !== '' ?
                    <Link href="/">
                        <a className={styles.prev}>
                            HOME
                            <img src="icons/breadcrumb-arrow.svg" alt=""/>
                        </a>
                    </Link>
                    : ''
                }
                <span className={styles.curr}>{currentPath}</span>
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
            
            <style jsx>
            {`
                a.active{
                    color: #DD5C28;
                }
            `}
            </style>
            <nav className={ burgerMenuState ? [styles.sidenav, styles.nav, styles.active].join(' ') : [styles.sidenav, styles.nav].join(' ')}>
                <ActiveLink activeClassName="active" href="/">
                    <a>Home</a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/work">
                    <a>Work</a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/certificates">
                    <a>Certificates</a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/articles">
                    <a>Articles</a>
                </ActiveLink>
            </nav>
            <div className={ burgerMenuState ? [styles.sidenavOverlay, styles.active].join(' '): styles.sidenavOverlay}></div>
        </header>
    )
}

export default Navbar