import Link from 'next/link'
import styles from './navbar.module.css'


const Navbar = () => {

    let burgerMenuActive = false;

    function changeMenuState(){
        burgerMenuActive = !burgerMenuActive;
        console.log("ss")
    }
    return (
        <header>
            <div className={styles.breadcrumb}>
                
            </div>

            <button onClick={() => changeMenuState()} className={[styles.burgerMenu, styles.active].join(" ")}>
                <svg viewBox="0 0 64 48">
                    <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                    <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                    <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
                </svg>
            </button>

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
            <div className={styles.sidenavOverlay}></div>
        </header>
    )
}

export default Navbar