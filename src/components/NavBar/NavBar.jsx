import MenuItem from './MenuItem/MenuItem'
import styles from './NavBar.module.css'

function NavBar(){
    return <>
        <nav className={styles.container}>
            <ul className={styles.menu}>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </ul>
        </nav>
    </>
}

export default NavBar