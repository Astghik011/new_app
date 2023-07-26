
import styles from '../components/MainContent/MainContent.module.css'
import sauce1 from '../images/sauce_images/sauce_1.webp'
import sauce2 from '../images/sauce_images/sauce_2.jpg'
import sauce3 from '../images/sauce_images/sauce_3.jpg'
import sauce4 from '../images/sauce_images/sauce_4.jpg'
import sauce5 from '../images/sauce_images/sauce_5.jpg'
import sauce6 from '../images/sauce_images/sauce_6.jpg'

function Sauce(){
    return (
        <main>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={sauce1} alt="sauce" />
            <span className={styles.priceMain}>640₽</span>
            <p className={styles.productsName}>Филадельфия</p>
            <span className={styles.productsMass}>520г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={sauce2} alt="sauce" />
            <span className={styles.priceMain}>687₽</span>
            <p className={styles.productsName}>Королевский</p>
            <span className={styles.productsMass}>500г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={sauce3} alt="sauce" />
            <span className={styles.priceMain}>590₽</span>
            <p className={styles.productsName}>Гавайский лосось</p>
            <span className={styles.productsMass}>450г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={sauce4} alt="sauce" />
            <span className={styles.priceMain}>570₽</span>
            <p className={styles.productsName}>Кубанский</p>
            <span className={styles.productsMass}>480г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={sauce5} alt="sauce" />
            <span className={styles.priceMain}>725₽</span>
            <p className={styles.productsName}>Белый дракон</p>
            <span className={styles.productsMass}>510г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={sauce6} alt="sauce" />
            <span className={styles.priceMain}>620₽</span>
            <p className={styles.productsName}>Мексиканский</p>
            <span className={styles.productsMass}>520г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        </main>
    )
}

export default Sauce