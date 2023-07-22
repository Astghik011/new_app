import styles from './Aside.module.css'
import thmb1 from '../../thumbnails/Rectangle1.png'
import { useCallback, useReducer } from 'react'
import data from '../../data.json'



const { burger1 } = data[0]

// useReducer, useCallback

const reducer = ((state, action) => {
    if(action.type === "add") return {value: state.value + 1}
    if(action.type === "subtract") return {value: state.value - 1}
    // return state
})

function Aside(){
    const initialState = {value: 0}
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubtract = useCallback(()=>{
        dispatch({type:"subtract"})
    }, [])

    const handleAdd = useCallback(()=>{
        dispatch({type:"add"})
    }, [])

    return <div>
        <aside>
            <figure className={styles.order}>
                <h2>Корзина</h2>
                <span className ={styles.numberOfOrders}>{state.value}</span>
            </figure>
        <div className={styles.orders}>
            <figure className={styles.order}>
                <img className={`${styles.thmb} ${styles.thmb1}`} src={thmb1} alt={`${burger1}`}/>
                <figcaption className={styles.orderDetails}>
                    <h3 className={styles.orderName}>{burger1.name}</h3>
                    <p className={styles.weight}>{burger1.price}г</p>
                    <p className={styles.price}>{burger1.weight}₽</p>
                </figcaption>
                <div className={styles.addOrder}>
                    <button className={styles.subtract} onClick ={handleSubtract}>-</button>
                    <input className={styles.number} value = {state.value} />
                    <button className={styles.add} onClick={handleAdd}>+</button>             
                </div>
            </figure>

{/* useState */}

{/* function Aside(){

    const [numberOfItems, setNumberOfItems] = useState(0)

    function addByOne(){
        setNumberOfItems(numberOfItems+1)
    }

    function subtractByOne(){
        setNumberOfItems(numberOfItems-1)
    }

    return <div>
        <aside>
            <figure className={styles.order}>
                <h2>Корзина</h2>
                <span className ={styles.numberOfOrders}>{numberOfItems}</span>
            </figure>
        <div className={styles.orders}>
            <figure className={styles.order}>
                <img className={`${styles.thmb} ${styles.thmb1}`} src={thmb1} />
                <figcaption className={styles.orderDetails}>
                    <h3 className={styles.orderName}>{burger1.name}</h3>
                    <p className={styles.weight}>{burger1.price}г</p>
                    <p className={styles.price}>{burger1.weight}₽</p>
                </figcaption>
                <div className={styles.addOrder}>
                    <button className={styles.subtract} onClick ={subtractByOne}>-</button>
                    <input className={styles.number} value = {numberOfItems} />
                    <button className={styles.add} onClick={addByOne}>+</button>             
                </div>
            </figure> */}
            {/* <figure class="order">
                <img class="thmb thmb2" src="thumbnails/Rectangle2.png" />
                <figcaption class="order_details">
                    <h3 class="order_name">Картошка фри</h3>
                    <p class="weight">180г</p>
                    <p class="price">245₽</p>
                </figcaption>
                <div class="add_order">
                    <button class="subtract">-</button><input class="number" value = "0" /><button class="add">+</button>
                </div>
            </figure>
            <figure class="order">
                <img class="thmb thmb3" src="thumbnails/Rectangle3.png" />
                <figcaption class="order_details">
                    <h3 class="order_name">Жгучий хот-дог</h3>
                    <p class="weight">245г</p>
                    <p class="price">239₽</p>
                </figcaption>
                <div class="add_order">
                    <button class="subtract">-</button><input type="text" class="number" value = "0" /><button class="add">+</button>        
                </div>
            </figure>
            <div class="order total">
                <span class="sum_total">Итого</span>
                <span id="total_price">1235₽</span>
            </div>
                <button onclick="showDeliveryWindow()" type="button" id="submit_order">Оформить заказ</button>
            <div class="free_delivery">
                <img id="delivery" src="icons/free-icon-delivery-2362252.png" />
                <span>Бесплатная доставка</span>
            </div> */}
        </div>
        </aside>
    </div>
}

export default Aside