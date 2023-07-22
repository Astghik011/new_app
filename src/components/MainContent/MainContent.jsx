import styles from './MainContent.module.css'
import burger1 from '../../images/burger_images/burger_1.jpg'
import burger2 from '../../images/burger_images/burger_2.jpg'
import burger3 from '../../images/burger_images/burger_3.jpg'
import burger4 from '../../images/burger_images/burger_4.jpg'
import burger5 from '../../images/burger_images/burger_5.jpg'
import burger6 from '../../images/burger_images/burger_6.jpg'
import React from 'react'
import burgers from '../../data.json'
console.log(burgers)


const handleClick = () => {
    console.log('Read description');
  };
  
  const BurgerData = () => {
    return burgers.map((burger, index) => (
        <div className={styles.products_main}>
            <img className={styles.productsImg} src={burger} alt="Burger" />
            <span className={styles.price_main}>{burger.price}₽</span>
            <p className={styles.productsName}>{burger.name}</p>
            <span className={styles.productsMass}>{burger.weight}г</span>
            <button className={styles.btn_main} onClick={handleClick}>
              Добавить
            </button>
          </div>
    ));
  };
  
  function MainContent() {
    return (
      <div className={`${styles.container} ${styles.mainContent}`}>
        <main>
          <BurgerData/>

        </main>
      </div>
    );
  }
  
  export default MainContent;
 
  
  
  
  