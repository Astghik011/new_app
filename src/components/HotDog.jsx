import styles from '../components/MainContent/MainContent.module.css'
import hotDog1 from '../images/hot-dog_images/hot-dog_1.png'
import hotDog2 from '../images/hot-dog_images/hot-dog_2.png'
import hotDog3 from '../images/hot-dog_images/hot-dog_3.png'
import hotDog4 from '../images/hot-dog_images/hot-dog_4.jpg'
import hotDog5 from '../images/hot-dog_images/hot-dog_5.jpg'
import hotDog6 from '../images/hot-dog_images/hot-dog_6.jpg'

function HotDog(){
    return(
        <main>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={hotDog1} alt="hot dog" />
                <span className={styles.priceMain}>640₽</span>
                <p className={styles.productsName}>Филадельфия</p>
                <span className={styles.productsMass}>520г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={hotDog2} alt="hot dog" />
                <span className={styles.priceMain}>687₽</span>
                <p className={styles.productsName}>Королевский</p>
                <span className={styles.productsMass}>500г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={hotDog3} alt="hot dog" />
                <span className={styles.priceMain}>590₽</span>
                <p className={styles.productsName}>Гавайский лосось</p>
                <span className={styles.productsMass}>450г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={hotDog4} alt="hot dog" />
                <span className={styles.priceMain}>570₽</span>
                <p className={styles.productsName}>Кубанский</p>
                <span className={styles.productsMass}>480г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={hotDog5} alt="hot dog" />
                <span className={styles.priceMain}>725₽</span>
                <p className={styles.productsName}>Белый дракон</p>
                <span className={styles.productsMass}>510г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={hotDog6} alt="hot dog" />
                <span className={styles.priceMain}>620₽</span>
                <p className={styles.productsName}>Мексиканский</p>
                <span className={styles.productsMass}>520г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
        </main>
    )
}

export default HotDog