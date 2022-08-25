import * as Styles from './styles'
import imageDelivey from '../../assets/delivery.svg'
import {MapPin, Timer, CurrencyDollar} from 'phosphor-react'
import {useLocation} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Success(){
  const {cartItems} = useContext(CartContext)
  const {state} = useLocation();

  console.log(cartItems)

  

  return (
    <Styles.Conteiner>
      <Styles.ContentLeft>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <Styles.InfoDelivery>
        <div className='conteiner-info '>
          <div className='icon icon-map'><MapPin size={16} weight="fill" /></div>
          <span>
            <p>Entrega em <strong>{state.street}, {state.number}</strong></p>
            <p>{state.district} - {state.city}, {state.state}</p>
          </span>
        </div>
        <div className='conteiner-info '>
          <div className='icon icon-timer'><Timer size={16} weight="fill"/></div>
          <span>
            <p>Previsão de entrega</p>
            <p><strong>20 min - 30 min</strong></p>
          </span>
        </div>
        <div className='conteiner-info '>
          <div className='icon icon-dolar'><CurrencyDollar size={16} weight="fill" /></div>
          <span>
            <p>Pagamento na entrega</p>
            <p><strong>{state.method === 'credit' && 'Cartão de Crédito'}</strong></p>
            <p><strong>{state.method === 'debit' && 'Cartão de Débito'}</strong></p>
            <p><strong>{state.method === 'money' && 'Dinheiro'}</strong></p>
          </span>
        </div>
          
        </Styles.InfoDelivery>
      </Styles.ContentLeft>
      <Styles.ContentRight>
        <img src={imageDelivey} />
      </Styles.ContentRight>
    </Styles.Conteiner>
  )
}