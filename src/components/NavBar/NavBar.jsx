import MenuItem from './MenuItem/MenuItem'
import styles from './NavBar.module.css'
import {Router, Routes, Route} from 'react-router-dom'
import Index from '../Index'
import Sauce from '../Sauce'
import Pizza from '../Pizza'
import Wok from '../Wok'
import HotDog from '../HotDog'
import Snacks from '../Snacks'
import Shawarma from '../Shawarma'
import Dessert from '../Dessert'
import Kombo from '../Kombo'

function NavBar(props){
    return <>
      <Router>
        <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="Dessert" element={<Dessert />} />
            <Route exact path="HotDog" element={<HotDog />} />
            <Route exact path="Kombo" element={<Kombo />} />
            <Route exact path="Pizza" element={<Pizza />} />
            <Route exact path="Sauce" element={<Sauce />} />
            <Route exact path="Snacks" element={<Snacks />} />
            <Route exact path="Wok" element={<Wok />} />
            <Route exact path="Shawarma" element={<Shawarma />} />
            <nav className={styles.container}>
                <ul className={styles.menu}>
                    <MenuItem src={props.src}/>
                </ul>
            </nav>
        </Routes>
      </Router>
    </>
}

export default NavBar