import * as Styles from './styles'
import { CurrencyDollar, MapPinLine, CreditCard, Bank, Money, Minus, Plus, Trash } from 'phosphor-react'
import coffes from '../../assets/Coffee.png'
import { TitleSubtitleIcon } from '../../components/TitleSubtitleIcon'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Checkout(){
  const { cartItems, valueFinal, valueItems, deliveryValue, changeQuantity } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  function handleChangeQuantity(item, name){
    changeQuantity(item, name)
  }

  return(
    <Styles.Conteiner>
      <Styles.ContainerCheckout>
        <Styles.ContentCompletOrder>
        <h2>Complete seu pedido</h2>

        <Styles.ContentAddress>
          <TitleSubtitleIcon
              title="Endereço de Entrega"
              subtitle="Informe o endereço onde deseja receber o pedido"
              icon={<MapPinLine color={'#C47F17'} size={22} />}
            />
          
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
        <Styles.ContentAddress>
          <TitleSubtitleIcon
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={<CurrencyDollar color={'#8047F8'} size={22} />}
          />
          <Styles.Buttons>
            <Styles.ButtonPay>
              <CreditCard size={22}/>
              <small>CARTÃO DE CRÉDITO</small>
            </Styles.ButtonPay>
            <Styles.ButtonPay>
              <Bank size={22}/>
              <small>CARTÃO DE CRÉDITO</small>
            </Styles.ButtonPay>
            <Styles.ButtonPay>
              <Money size={22}/>
              <small>CARTÃO DE CRÉDITO</small>
            </Styles.ButtonPay>
          </Styles.Buttons>
        </Styles.ContentAddress>
        </Styles.ContentCompletOrder>
        
          
        <Styles.OrderCart>
        <h2>Cafés selecionados</h2>
        <Styles.CartProduct>
          {cartItems.map(item => (
          
            <Styles.ItemCart key={item.id}>
            <>
            {console.log(item)}
            <img src={`/coffes/${item.photo}`} />
            <div>
              <p className='titleCoffe'>{item.name}</p> 
              <div className='buttons'>
                <div className="quantity">
                  <button className="buttonMinus" disabled={item.quantity <= 1} onClick={() => handleChangeQuantity(item, 'decrement')}>
                    <Minus size={14} weight="bold"  />
                  </button>
                    {item.quantity}
                  <button className="buttonPlus" onClick={() => handleChangeQuantity(item, 'increment')}>
                    <Plus size={14} weight="bold"/>
                  </button>
                
                </div>
                <button className='remove'>
                  <Trash size={16} weight="bold"/>
                  <p>REMOVER</p>
                </button>  
              </div>
              
            </div>
            <p className='price'>R$ {(item.price * item.quantity).toFixed(2)}</p>
            </>
          </Styles.ItemCart>
          ))}
          <hr color='#E6E5E5' width = "100%" size="2" />
        
          <Styles.TotalCart>
            <div className='totalItens'>
              <span>Total de itens</span>
              <small>R$ {valueItems.toFixed(2)}</small>
            </div>
            <div className='entrega'>
              <span>Entrega</span>
              <small>R$ {deliveryValue.toFixed(2)}</small>
            </div>
            <div className='total'>
              <span>TOTAL</span>
              <small className='totalPrice'>R$ {valueFinal.toFixed(2)}</small>
            </div>

          </Styles.TotalCart>
          <Styles.ConfirmarPedidoButton>CONFIRMAR PEDIDO</Styles.ConfirmarPedidoButton>
        </Styles.CartProduct>
        </Styles.OrderCart>
      </Styles.ContainerCheckout>
    </Styles.Conteiner>
  )
}