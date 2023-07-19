import styles from './MainContent.module.css'
import burger1 from '../../images/burger_images/burger_1.jpg'
import burger2 from '../../images/burger_images/burger_2.jpg'
import burger3 from '../../images/burger_images/burger_3.jpg'
import burger4 from '../../images/burger_images/burger_4.jpg'
import burger5 from '../../images/burger_images/burger_5.jpg'
import burger6 from '../../images/burger_images/burger_6.jpg'
import React, {useState} from 'react'


function MainContent(){

    const [description, setDescription] = useState("");

    const handleClick = (()=> setDescription())

    return (
        <div className={`${styles.container} ${styles.main_content}`}>
        <main>
            <div className={styles.products_main}>
                <img className={styles.productsImg} src={burger1} alt="Burger" />
                <span className={styles.price_main}>640₽</span>
                <p className={styles.productsName}>Филадельфия</p>
                <span className={styles.productsMass}>520г</span>
                <button className={styles.btn_main} onClick={handleClick}>Добавить</button>
            </div>
            <div className={styles.products_main}>
                <img className={styles.productsImg} src={burger2} alt="Burger" />
                <span className={styles.price_main}>687₽</span>
                <p className={styles.productsName}>Королевский</p>
                <span className={styles.productsMass}>500г</span>
                <button className={styles.btn_main}>Добавить</button>
            </div>
            <div className={styles.products_main}>
                <img className={styles.productsImg} src={burger3} alt="Burger" />
                <span className={styles.price_main}>590₽</span>
                <p className={styles.productsName}>Гавайский лосось</p>
                <span className={styles.productsMass}>450г</span>
                <button className={styles.btn_main}>Добавить</button>
            </div>
            <div className={styles.products_main}>
                <img className={styles.productsImg} src={burger4} alt="Burger" />
                <span className={styles.price_main}>570₽</span>
                <p className={styles.productsName}>Кубанский</p>
                <span className={styles.productsMass}>480г</span>
                <button className={styles.btn_main}>Добавить</button>
            </div>
            <div className={styles.products_main}>
                <img className={styles.productsImg} src={burger5} alt="Burger" />
                <span className={styles.price_main}>725₽</span>
                <p className={styles.productsName}>Белый дракон</p>
                <span className={styles.productsMass}>510г</span>
                <button className={styles.btn_main}>Добавить</button>
            </div>
            <div className={styles.products_main}>
                <img className={styles.productsImg} src={burger6} alt="Burger" />
                <span className={styles.price_main}>620₽</span>
                <p className={styles.productsName}>Мексиканский</p>
                <span className={styles.productsMass}>520г</span>
                <button className={styles.btn_main}>Добавить</button>
            </div>
        </main>
    </div>)
}

export default MainContent