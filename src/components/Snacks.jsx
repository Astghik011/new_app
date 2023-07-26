import styles from '../components/MainContent/MainContent.module.css'
import snack1 from '../images/snacks_images/snacks_1.jpg'
import snack2 from '../images/snacks_images/snacks_2.jpg'
import snack3 from '../images/snacks_images/snacks_3.jpg'
import snack4 from '../images/snacks_images/snacks_4.jpg'
import snack5 from '../images/snacks_images/snacks_5.jpg'
import snack6 from '../images/snacks_images/snacks_6.jpg'

function Snacks(){
    return (
        <main>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={snack1} alt="snack" />
            <span className={styles.priceMain}>640₽</span>
            <p className={styles.productsName}>Филадельфия</p>
            <span className={styles.productsMass}>520г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={snack2} alt="snack" />
            <span className={styles.priceMain}>687₽</span>
            <p className={styles.productsName}>Королевский</p>
            <span className={styles.productsMass}>500г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={snack3} alt="snack" />
            <span className={styles.priceMain}>590₽</span>
            <p className={styles.productsName}>Гавайский лосось</p>
            <span className={styles.productsMass}>450г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={snack4} alt="snack" />
            <span className={styles.priceMain}>570₽</span>
            <p className={styles.productsName}>Кубанский</p>
            <span className={styles.productsMass}>480г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={snack5} alt="snack" />
            <span className={styles.priceMain}>725₽</span>
            <p className={styles.productsName}>Белый дракон</p>
            <span className={styles.productsMass}>510г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={snack6} alt="snack" />
            <span className={styles.priceMain}>620₽</span>
            <p className={styles.productsName}>Мексиканский</p>
            <span className={styles.productsMass}>520г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        </main>
    )
}

export default Snacks