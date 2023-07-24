import styles from './MenuItem.module.css'
import cheeseburger from '../../../icons/free-icon-cheeseburger-2362255.png'
import burrito from '../../../icons/free-icon-burrito-2362225.png'
import hotdog from '../../../icons/free-icon-hotdog-sandwich-2362313.png'
import combo from '../../../icons/free-icon-fast-food-2362274.png'
import pizza from '../../../icons/free-icon-pizza-2362372.png'
import noodles from '../../../icons/free-icon-noodles-2362350.png'
import doughnut from '../../../icons/free-icon-doughnut-2362260.png'
import ketchup from '../../../icons/free-icon-ketchup-2362341.png'
import { Link } from 'react-router-dom'

function MenuItem(){
    return <>
        <li className={`${styles.btn} ${styles.frame1} ${styles.active}`}>
            <img className="icon" src={cheeseburger} alt="cheeseburger"/>                  
            <Link to="/">Бургеры</Link>
        </li>
        <li className={`${styles.btn} ${styles.frame2}`}>
            <img className="icon" src={burrito} alt="burrito"/>
            <Link to="/snacks">Закуски</Link>
        </li>
        <li className={`${styles.btn} ${styles.frame3}`}>
            <img className="icon" src={hotdog} alt="hotdog" />
            <Link to="/hot-dog">Хот-доги</Link>
        </li>
        <li className={`${styles.btn} ${styles.frame4}`}>
            <img className="icon" src={combo} alt="combo" />
            <Link to="/kombo">Комбо</Link>
        </li>
        <li className={`${styles.btn} ${styles.frame5}`}>
            <img className="icon" src={burrito} alt="burrito"  />
            <Link to="/shawarma">Шаурма</Link>
        </li>
        <li className={`${styles.btn} ${styles.frame6}`}>
            <img className="icon" src={pizza} alt="pizza" />
            <Link to="/pizza">Пицца</Link>
        </li>
        <li className={`${styles.btn} ${styles.frame7}`}>
            <img className="icon" src={noodles} alt="noodles" />
            <Link to="/wok">Вок</Link>
        </li>
        <li className={`${styles.btn} ${styles.frame8}`}>
            <img className="icon" src={doughnut} alt="doughnut" />
            <Link to="/dessert">Десерты</Link>
        </li>
        <li className={`${styles.btn} ${styles.frame9}`}>
            <img className="icon" src={ketchup} alt="ketchup"  />
            <Link to="/sauce">Соусы</Link>
        </li>
    </>
}

export default MenuItem