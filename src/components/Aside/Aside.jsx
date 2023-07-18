import styles from './Aside.module.css'

function Aside(){
    return <div>
        <aside>
            <figure className="order">
                <h2>Корзина</h2>
                <span id="number_of_orders">4</span>
            </figure>
        <div class="orders">
            <figure class="order">
                <img class="thmb thmb1" src="thumbnails/Rectangle1.png" />
                <figcaption class="order_details">
                    <h3 class="order_name">Супер сырный</h3>
                    <p class="weight">512г</p>
                    <p class="price">550₽</p>
                </figcaption>
                <div class="add_order">
                    <button class="subtract">-</button><input class="number" value = "0" /><button class="add">+</button>             
                </div>
            </figure>
            <figure class="order">
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
            </div>
        </div>
        </aside>
    </div>
}

export default Aside