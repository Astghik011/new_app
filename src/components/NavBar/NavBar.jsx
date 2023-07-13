import MenuItem from './MenuItem/MenuItem'
import styles from './NavBar.module.css'

function NavBar(props){
    return <>
        <nav className={styles.container}>
            <ul className={styles.menu}>
                <MenuItem src={props.src}/>
            </ul>
        </nav>
    </>
}

export default NavBar