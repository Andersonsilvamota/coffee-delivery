import * as Styles from './styles'
import imageDelivey from '../../assets/delivery.svg'
import {MapPin, Timer, CurrencyDollar} from 'phosphor-react'

export function Success(){
  return (
    <Styles.Conteiner>
      <Styles.ContentLeft>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <Styles.InfoDelivery>
        <div className='conteiner-info '>
          <div className='icon icon-map'><MapPin size={16} weight="fill" /></div>
          <span>
            <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
            <p>Farrapos - Porto Alegre, RS</p>
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
            <p><strong>Cartão de Crédito</strong></p>
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