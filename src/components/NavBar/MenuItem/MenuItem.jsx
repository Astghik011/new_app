import styles from './MenuItem.module.css'
import cheeseburger from '../../../icons/free-icon-cheeseburger-2362255.png'
import burrito from '../../../icons/free-icon-burrito-2362225.png'
import hotdog from '../../../icons/free-icon-hotdog-sandwich-2362313.png'
import combo from '../../../icons/free-icon-fast-food-2362274.png'
import pizza from '../../../icons/free-icon-pizza-2362372.png'
import noodles from '../../../icons/free-icon-noodles-2362350.png'
import doughnut from '../../../icons/free-icon-doughnut-2362260.png'
import ketchup from '../../../icons/free-icon-ketchup-2362341.png'

function MenuItem(){
    return <>
        <li className={`${styles.btn} ${styles.frame1} ${styles.active}`}>
            <img className="icon" src={cheeseburger} alt="cheeseburger"/>                  
            <a href="index.html">Бургеры</a>
        </li>
        <li className={`${styles.btn} ${styles.frame2}`}>
            <img className="icon" src={burrito} alt="burrito"/>
            <a href="snacks.html">Закуски</a>
        </li>
        <li className={`${styles.btn} ${styles.frame3}`}>
            <img className="icon" src={hotdog} alt="hotdog" />
            <a href="hot-dog.html">Хот-доги</a>
        </li>
        <li className={`${styles.btn} ${styles.frame4}`}>
            <img className="icon" src={combo} alt="combo" />
            <a href="kombo.html">Комбо</a>
        </li>
        <li className={`${styles.btn} ${styles.frame5}`}>
            <img className="icon" src={burrito} alt="burrito"  />
            <a href="shawarma.html">Шаурма</a>
        </li>
        <li className={`${styles.btn} ${styles.frame6}`}>
            <img className="icon" src={pizza} alt="pizza" />
            <a href="pizza.html">Пицца</a>
        </li>
        <li className={`${styles.btn} ${styles.frame7}`}>
            <img className="icon" src={noodles} alt="noodles" />
            <a href="wok.html">Вок</a>
        </li>
        <li className={`${styles.btn} ${styles.frame8}`}>
            <img className="icon" src={doughnut} alt="doughnut" />
            <a href="dessert.html">Десерты</a>
        </li>
        <li className={`${styles.btn} ${styles.frame9}`}>
            <img className="icon" src={ketchup} alt="ketchup"  />
            <a href="sauce.html">Соусы</a>
        </li>
    </>
}

export default MenuItem