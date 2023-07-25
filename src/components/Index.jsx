import burger1 from '../images/burger_images/burger_1.jpg'
import burger2 from '../images/burger_images/burger_2.jpg'
import burger3 from '../images/burger_images/burger_3.jpg'
import burger4 from '../images/burger_images/burger_4.jpg'
import burger5 from '../images/burger_images/burger_5.jpg'
import burger6 from '../images/burger_images/burger_6.jpg'
import styles from '../components/MainContent/MainContent.module.css'

function Index(){
    return(
        <main>
        <div class={styles.productsMain}>
            <img class={styles.productsImg} src={burger1} alt="Burger" />
            <span class={styles.priceMain}>640₽</span>
            <p class={styles.productsName}>Филадельфия</p>
            <span class={styles.productsMass}>520г</span>
            <button class={styles.btnMain}>Добавить</button>
        </div>
        <div class={styles.productsMain}>
            <img class={styles.productsImg} src={burger2} alt="Burger" />
            <span class={styles.priceMain}>687₽</span>
            <p class={styles.productsName}>Королевский</p>
            <span class={styles.productsMass}>500г</span>
            <button class={styles.btnMain}>Добавить</button>
        </div>
        <div class={styles.productsMain}>
            <img class={styles.productsImg} src={burger3} alt="Burger" />
            <span class={styles.priceMain}>590₽</span>
            <p class={styles.productsName}>Гавайский лосось</p>
            <span class={styles.productsMass}>450г</span>
            <button class={styles.btnMain}>Добавить</button>
        </div>
        <div class={styles.productsMain}>
            <img class={styles.productsImg} src={burger4} alt="Burger" />
            <span class={styles.priceMain}>570₽</span>
            <p class={styles.productsName}>Кубанский</p>
            <span class={styles.productsMass}>480г</span>
            <button class={styles.btnMain}>Добавить</button>
        </div>
        <div class={styles.productsMain}>
            <img class={styles.productsImg} src={burger5} alt="Burger" />
            <span class={styles.priceMain}>725₽</span>
            <p class={styles.productsName}>Белый дракон</p>
            <span class={styles.productsMass}>510г</span>
            <button class={styles.btnMain}>Добавить</button>
        </div>
        <div class={styles.productsMain}>
            <img class={styles.productsImg} src={burger6} alt="Burger" />
            <span class={styles.priceMain}>620₽</span>
            <p class={styles.productsName}>Мексиканский</p>
            <span class={styles.productsMass}>520г</span>
            <button class={styles.btnMain}>Добавить</button>
        </div>
    </main>
    )
}

export default Index