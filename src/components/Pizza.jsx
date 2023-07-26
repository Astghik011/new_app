
import styles from '../components/MainContent/MainContent.module.css'
import pizza1 from '../images/pizza_images/pizza_1.webp'
import pizza2 from '../images/pizza_images/pizza_2.jpg'
import pizza3 from '../images/pizza_images/pizza_3.jpg'
import pizza4 from '../images/pizza_images/pizza_4.jpg'
import pizza5 from '../images/pizza_images/pizza_5.jpg'
import pizza6 from '../images/pizza_images/pizza_6.jpg'

function Pizza(){
    return(
        <main>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={pizza1} alt="pizza" />
                <span className={styles.priceMain}>640₽</span>
                <p className={styles.productsName}>Филадельфия</p>
                <span className={styles.productsMass}>520г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={pizza2} alt="pizza" />
                <span className={styles.priceMain}>640₽</span>
                <p className={styles.productsName}>Филадельфия</p>
                <span className={styles.productsMass}>520г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={pizza3} alt="pizza" />
                <span className={styles.priceMain}>640₽</span>
                <p className={styles.productsName}>Филадельфия</p>
                <span className={styles.productsMass}>520г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={pizza4} alt="pizza" />
                <span className={styles.priceMain}>640₽</span>
                <p className={styles.productsName}>Филадельфия</p>
                <span className={styles.productsMass}>520г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={pizza5} alt="pizza" />
                <span className={styles.priceMain}>640₽</span>
                <p className={styles.productsName}>Филадельфия</p>
                <span className={styles.productsMass}>520г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={pizza6} alt="pizza" />
                <span className={styles.priceMain}>640₽</span>
                <p className={styles.productsName}>Филадельфия</p>
                <span className={styles.productsMass}>520г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
        </main>
    )
}

export default Pizza