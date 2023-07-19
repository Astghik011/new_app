// import styles from './DeliveryWindow.module.css'
// import { useState } from 'react'


// function DeliveryWindow(){

//     const[delivery, setDelivery] = useState({display: "none"})

//     function closeDelivery() {
//         setDelivery({display: "flex"})
//     }

//     return( 
//     <div className ={styles.deliveryMain}>
//         <div className={styles.deliveryContainer}>
//             <div className={styles.deliveryImg}>
//                 <img src="./images/deliveryImgs/bublik.svg" alt="bublik" />
//             </div>
//             <div className={styles.deliveryForm}>
//                <p className={styles.formHead}>Доставка</p> 
//                <button onClick="closeDelivery" className={styles.deliveryClose}>
//                     <img src="./images/deliveryImgs/close.svg" alt="x" />
//                </button>
//                <form action="#" className={styles.mainForm}>
//                     <input type="text"  placeholder="Ваше имя" />
//                     <input type="number" placeholder="Телефон" />
//                     <br />
//                     <div className={styles.radio}>
//                         <input type="radio" id="pickup" name="type-delivery" />
//                         <label for="pickup">Самовывоз </label>
//                         <br />
//                         <input type="radio" id="delivery"  name="type-delivery" />
//                         <label for="delivery">Доставка</label>
//                     </div>
//                     <br />
//                     <input type="text" placeholder="Улица, дом, квартира" />
//                     <div className={styles.rowInput}>
//                         <input type="number" placeholder="Этаж" />
//                         <input type="number" placeholder="Домофон" />
//                     </div>
//                     <input type="submit" className={styles.formSubmit} value="Оформить" />
//                 </form>
//             </div>
//         </div>
//     </div>)
// }

// export default DeliveryWindow