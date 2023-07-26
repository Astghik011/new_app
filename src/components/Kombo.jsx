import styles from '../components/MainContent/MainContent.module.css'
import kombo1 from '../images/kombo_images/kombo_1.jpg'
import kombo2 from '../images/kombo_images/kombo_2.png'
import kombo3 from '../images/kombo_images/kombo_3.jpg'
import kombo4 from '../images/kombo_images/kombo_4.jpg'
import kombo5 from '../images/kombo_images/kombo_5.webp'
import kombo6 from '../images/kombo_images/kombo_6.jpg'

function Kombo(){
    return(
        <main>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={kombo1} alt="kombo" />
                <span className={styles.priceMain}>640₽</span>
                <p className={styles.productsName}>Филадельфия</p>
                <span className={styles.productsMass}>520г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={kombo2} alt="kombo" />
                <span className={styles.priceMain}>640₽</span>
                <p className={styles.productsName}>Филадельфия</p>
                <span className={styles.productsMass}>520г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={kombo3} alt="kombo" />
                <span className={styles.priceMain}>640₽</span>
                <p className={styles.productsName}>Филадельфия</p>
                <span className={styles.productsMass}>520г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={kombo4} alt="kombo" />
                <span className={styles.priceMain}>640₽</span>
                <p className={styles.productsName}>Филадельфия</p>
                <span className={styles.productsMass}>520г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={kombo5} alt="kombo" />
                <span className={styles.priceMain}>640₽</span>
                <p className={styles.productsName}>Филадельфия</p>
                <span className={styles.productsMass}>520г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
            <div className={styles.productsMain}>
                <img className={styles.productsImg} src={kombo6} alt="kombo" />
                <span className={styles.priceMain}>640₽</span>
                <p className={styles.productsName}>Филадельфия</p>
                <span className={styles.productsMass}>520г</span>
                <button className={styles.btnMain}>Добавить</button>
            </div>
        </main>
    )
}

export default Kombo