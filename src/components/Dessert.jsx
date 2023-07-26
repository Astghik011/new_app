import styles from '../components/MainContent/MainContent.module.css'
import dessert1 from '../images/dessert_images/dessert_1.jpg'
import dessert2 from '../images/dessert_images/dessert_2.jpg'
import dessert3 from '../images/dessert_images/dessert_3.jpg'
import dessert4 from '../images/dessert_images/dessert_4.jpg'
import dessert5 from '../images/dessert_images/dessert_5.jpg'
import dessert6 from '../images/dessert_images/dessert_6.jpg'

function Dessert(){
    return (
        <main>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={dessert1} alt="dessert" />
            <span className={styles.priceMain}>640₽</span>
            <p className={styles.productsName}>Филадельфия</p>
            <span className={styles.productsMass}>520г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={dessert2} alt="dessert" />
            <span className={styles.priceMain}>687₽</span>
            <p className={styles.productsName}>Королевский</p>
            <span className={styles.productsMass}>500г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={dessert3} alt="dessert" />
            <span className={styles.priceMain}>590₽</span>
            <p className={styles.productsName}>Гавайский лосось</p>
            <span className={styles.productsMass}>450г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={dessert4} alt="dessert" />
            <span className={styles.priceMain}>570₽</span>
            <p className={styles.productsName}>Кубанский</p>
            <span className={styles.productsMass}>480г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={dessert5} alt="dessert5" />
            <span className={styles.priceMain}>725₽</span>
            <p className={styles.productsName}>Белый дракон</p>
            <span className={styles.productsMass}>510г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={dessert6} alt="dessert" />
            <span className={styles.priceMain}>620₽</span>
            <p className={styles.productsName}>Мексиканский</p>
            <span className={styles.productsMass}>520г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        </main>
    )
}

export default Dessert