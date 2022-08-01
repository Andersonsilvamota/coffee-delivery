import * as Styles from "./styles";
import {coffees} from '../../../../../data'
import { ShoppingCart, Minus, Plus } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";

export function CardCoffee({coffee}){
  const [quantity, setQuantity] = useState(1)
  
  const {cartItems = [], addCoffeeToCart} = useContext(CartContext)

  function handleIncrement() {
    setQuantity(state => state + 1)
  }

  function handleDecrement() {
    setQuantity(state => state - 1)
  }

  function handlAddCart(){
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  return(
    <Styles.ContentCoffe>
      <Styles.CardCoffee key={coffee.id}>
        <div>
          <img src={`/coffes/${coffee.photo}`} width="120" height="120"/>
          <div className="tags">
            {coffee.tags.map(tag => (
              <p key={`${coffee.id}${tag}`} className="tag">{tag}</p>

            ))}
          </div>
          <h3>{coffee.name}</h3>
          <p>{coffee.description}</p>
          <footer>
            <div className="price">
              <small>R$</small>
              <strong>{coffee.price.toFixed(2)}</strong>

            </div>
            <div className="quantity">
              <button className="buttonMinus" disabled={quantity <= 1} onClick={handleDecrement}>
                <Minus weight="bold" />
              </button>
                <input type="number" readOnly value={quantity} />
              <button className="buttonPlus" onClick={handleIncrement}>
                <Plus weight="bold"/>
              </button>
            </div>
            <button className="cartButton" onClick={handlAddCart}>
              <ShoppingCart size={22} color="#fff" weight="fill" />
            </button>
          </footer>
        </div>
      </Styles.CardCoffee> 
    </Styles.ContentCoffe>
  )
}