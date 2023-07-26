import styles from '../components/MainContent/MainContent.module.css'
import shawarma1 from '../images/shawarma_images/shawarma_1.jpg'
import shawarma2 from '../images/shawarma_images/shawarma_2.jpg'
import shawarma3 from '../images/shawarma_images/shawarma_3.jpg'
import shawarma4 from '../images/shawarma_images/shawarma_4.jpg'
import shawarma5 from '../images/shawarma_images/shawarma_5.jpg'
import shawarma6 from '../images/shawarma_images/shawarma_6.jpg'

function Shawarma(){
    return (
        <main>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={shawarma1} alt="shawarma" />
            <span className={styles.priceMain}>640₽</span>
            <p className={styles.productsName}>Филадельфия</p>
            <span className={styles.productsMass}>520г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={shawarma2} alt="shawarma" />
            <span className={styles.priceMain}>687₽</span>
            <p className={styles.productsName}>Королевский</p>
            <span className={styles.productsMass}>500г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={shawarma3} alt="shawarma" />
            <span className={styles.priceMain}>590₽</span>
            <p className={styles.productsName}>Гавайский лосось</p>
            <span className={styles.productsMass}>450г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={shawarma4} alt="shawarma" />
            <span className={styles.priceMain}>570₽</span>
            <p className={styles.productsName}>Кубанский</p>
            <span className={styles.productsMass}>480г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={shawarma5} alt="shawarma" />
            <span className={styles.priceMain}>725₽</span>
            <p className={styles.productsName}>Белый дракон</p>
            <span className={styles.productsMass}>510г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        <div className={styles.productsMain}>
            <img className={styles.productsImg} src={shawarma6} alt="shawarma" />
            <span className={styles.priceMain}>620₽</span>
            <p className={styles.productsName}>Мексиканский</p>
            <span className={styles.productsMass}>520г</span>
            <button className={styles.btnMain}>Добавить</button>
        </div>
        </main>
    )
}

export default Shawarma