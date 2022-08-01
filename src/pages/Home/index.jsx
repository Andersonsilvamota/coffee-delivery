import { ShoppingCart, Timer, Coffee, Package, Minus, Plus } from "phosphor-react";
import * as Styles from "./styles";
import imgBanner from '../../assets/banner.svg'
import {coffees} from '../../../data'
import { CardCoffee } from "./components/CardCoffee";

export function Home(){
  return(
    <Styles.ConteinerHome>
      <Styles.ConteinerBanner>
        <Styles.ContentLeft>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <div>
            <span>
              <div className="icon iconCart"><ShoppingCart size={16} weight="fill"/></div>
              <strong>Compra simples e segura</strong>
            </span>
            <span>
              <div className="icon iconPackage"><Package size={16} weight="fill"/></div>
              <strong>Embalagem mantém o café intacto</strong>
            </span>
            <span>
              <div className="icon iconTimer"><Timer size={16} weight="fill"/></div>
              <strong>Entrega rápida e segura</strong>
            </span>
            <span>
              <div className="icon iconCoffee"><Coffee size={16} weight="fill" /></div>
              <strong>O café chega fresquinho até você</strong>
            </span>
            
          </div>
        </Styles.ContentLeft>
        <Styles.ContentRight>
          <img src={imgBanner} />
        </Styles.ContentRight>
      </Styles.ConteinerBanner>

        <h2>Nossos cafés</h2>
        <Styles.ContentCoffe>
        {coffees.map(coffee => (
            <CardCoffee key={coffee.id} coffee={coffee}/>
        ))}
        </Styles.ContentCoffe>
    </Styles.ConteinerHome>
  )
}