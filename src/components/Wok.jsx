import styles from '../components/MainContent/MainContent.module.css'
import wok1 from '../images/wok_images/wok_1.jpg'
import wok2 from '../images/wok_images/wok_2.webp'
import wok3 from '../images/wok_images/wok_3.webp'
import wok4 from '../images/wok_images/wok_4.png'
import wok5 from '../images/wok_images/wok_5.jpg'
import wok6 from '../images/wok_images/wok_6.jpg'

function Wok(){
    return (
        <main>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={wok1} alt="wok" />
            <span className={styles.priceMain}>640₽</span>
            <p className={styles.productsName}>Филадельфия</p>
            <span className={styles.productsMass}>520г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={wok2} alt="wok" />
            <span className={styles.priceMain}>687₽</span>
            <p className={styles.productsName}>Королевский</p>
            <span className={styles.productsMass}>500г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={wok3} alt="wok" />
            <span className={styles.priceMain}>590₽</span>
            <p className={styles.productsName}>Гавайский лосось</p>
            <span className={styles.productsMass}>450г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={wok4} alt="wok" />
            <span className={styles.priceMain}>570₽</span>
            <p className={styles.productsName}>Кубанский</p>
            <span className={styles.productsMass}>480г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={wok5} alt="wok" />
            <span className={styles.priceMain}>725₽</span>
            <p className={styles.productsName}>Белый дракон</p>
            <span className={styles.productsMass}>510г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={wok6} alt="wok" />
            <span className={styles.priceMain}>620₽</span>
            <p className={styles.productsName}>Мексиканский</p>
            <span className={styles.productsMass}>520г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        </main>
    )
}

export default Wok