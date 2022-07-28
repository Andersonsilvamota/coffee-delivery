import * as Styles from './styles'
import { MapPinLine } from 'phosphor-react'

export function Checkout(){
  return(
    <Styles.Conteiner>

        <h2>Complete seu pedido</h2>
      <Styles.ContainerCheckout>
        <Styles.ContentAddress>
          <div className='title'>
            <MapPinLine size={22} />
            <div>
              <label>Endereço de Entrega</label>
              <p>Informe o endereço onde deseja receber o pedido</p>
            </div>
          </div>
          <div className='form'>
            <input className='cep' placeholder='CEP'/>
            <input className='street' placeholder='Rua'/>
            <input placeholder='Número'/>
            <input className='complement' placeholder='Complemento'/>
            <input placeholder='Bairro'/>
            <input placeholder='Cidade'/>
            <input placeholder='UF'/>
          </div>
        </Styles.ContentAddress>
        <Styles.OrderCart>
          <h2>Cafés selecionados</h2>
          
        </Styles.OrderCart>
      </Styles.ContainerCheckout>
    </Styles.Conteiner>
  )
}