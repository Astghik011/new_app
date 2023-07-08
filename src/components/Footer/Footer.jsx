import styles from './Footer.module.css'
import YourMeal from './../../icons/YourMeal.png'
import fork from './../../icons/fork.png'
import spoon from './../../icons/spoon.png'
import knife from './../../icons/knife.png'
import Vector from './../../icons/Vector.png'
import vk from './../../icons/vk.png'
import telegram from './../../icons/telegram.png'

function Footer(){
    return (<footer>
    <div className={`${styles.container} ${styles.foot}`}>
        <div className={styles.left}>
            <figure className={styles.large_logo}>
                <img src={YourMeal} className={styles.YourMeal} alt="YourMeal"/>
                <img src={fork} className={`${styles.tableware} ${styles.fork}`} alt="fork"/>
                <img src={spoon} className={`${styles.tableware} ${styles.spoon}`} alt="spoon" />
                <img src={knife} className={`${styles.tableware} ${styles.knife}`} alt="knife"/>
            </figure>
            <div className={styles.copyright}>
                <p className={styles.copy}>© YourMeal, 2022</p>
                <p className={styles.copy}>Design: Anastasia Ilina</p>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.order_number}>
                <p className={styles.delivery_number}>Номер для заказа</p>
                <img src={Vector} className={styles.phone} alt="vector" />
                <a href="tel:+7(930)833-38-11" className={styles.phone}>+7(930)833-38-11</a>
            </div>
            <div className={styles.order_number}>
                <p className={styles.delivery_number}>Мы в соцсетях</p>
                <a href="https://vk.com/"><img src={vk} className={`${styles.vk} ${styles.media_icon}`} alt="vk"/></a>
                <a href="https://web.telegram.org/k/"><img src={telegram} className={`${styles.telegram} ${styles.media_icon}`} alt="telegram"/></a>
            </div>
        </div>
    </div>
</footer>
)
}

export default Footer