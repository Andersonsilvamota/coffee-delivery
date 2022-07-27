import * as Styles from "./styles";
import {coffees} from '../../../../../data'
import { ShoppingCart, Minus, Plus } from "phosphor-react";

export function CardCoffee(){
  return(
    <Styles.ContentCoffe>
        {coffees.map(coffe => (
          <Styles.CardCoffee key={coffe.id}>

            <div >
              <img src={`/coffes/${coffe.photo}`} width="120" height="120"/>
              <div className="tags">
                {coffe.tags.map(tag => (
                  <p key={`${coffe.id}${tag}`} className="tag">{tag}</p>

                ))}
              </div>
              <h3>{coffe.name}</h3>
              <p>{coffe.description}</p>
              <footer>
                R$<strong>{coffe.price}</strong>
                <div className="quantity">
                  <Minus />
                  0
                  <Plus />
                </div>
                <div className="cartButton">
                  <ShoppingCart size={22} color="#fff" weight="fill"/>

                </div>
              </footer>
            </div>
          </Styles.CardCoffee>
          ))}
          
        </Styles.ContentCoffe>
  )
}