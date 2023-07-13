import styles from './Header.module.css'
import Logo from './../../images/headerLogosImgs/logo.svg'
import LogoImgs from "./../../images/headerLogosImgs/burger.svg"


function Header(){
    return <header className={styles.headerMain}>
        <div className={styles.yellowEllipse}></div>
        <a href="./#" className={styles.headerLink}>
            <img src={Logo} alt="yourmeal" />
        </a>
    <div className={styles.contentContainer}>
        <img className={styles.burgerImg} src={LogoImgs} alt="burger"/>
        <h2 className={styles.hdContainerText}>Только самые <span>сочные бургеры!</span></h2>
        <p className={styles.headerParagraph}>Бесплатная доставка от <span>599₽</span></p>
    </div>
    </header>
}

export default Header