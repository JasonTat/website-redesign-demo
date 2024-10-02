import styles from './Navigation.module.scss'

function Navigation () {
    return (
        <>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <a className={styles.navLink} href="">Home</a>
                    <a className={styles.navLink} href="">Services</a>
                    <a className={styles.navLink} href="">Aerospace</a>
                    <a className={styles.navLink} href="">Our Culture</a>
                    <a className={styles.navLink} href="">Sustainability</a>
                    <a className={styles.navLink} href="">Contact Us</a>
                </nav>
            </div>
        </>
    );
}


export default Navigation;