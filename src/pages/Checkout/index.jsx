import * as Styles from './styles'
import { CurrencyDollar, MapPinLine, CreditCard, Bank, Money, Minus, Plus, Trash } from 'phosphor-react'
import coffes from '../../assets/Coffee.png'

export function Checkout(){
  return(
    <Styles.Conteiner>
      
      <Styles.ContainerCheckout>
        <Styles.ContentCompletOrder>
        <h2>Complete seu pedido</h2>

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
        <Styles.ContentAddress>
          <div className='title'>
            <CurrencyDollar size={22} />
            <div>
              <label>Endereço de Entrega</label>
              <p>Informe o endereço onde deseja receber o pedido</p>
            </div>
          </div>
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
          <Styles.ItemCart>
            <img src={coffes} />
            <div>
              <p className='titleCoffe'>Expresso Tradicional</p> 
              <div className='buttons'>
                <div className="quantity">
                  <div className="buttonMinus">
                    <Minus weight="bold"/>
                  </div>
                    0
                  <div className="buttonPlus">
                    <Plus weight="bold"/>
                  </div>
                
                </div>
                <button>
                  <Trash size={20}/>
                  <p>REMOVER</p>
                </button>  
              </div>
              
            </div>
          </Styles.ItemCart>
            <hr color='#E6E5E5' width = "100%" size="2" />
          
          <Styles.ItemCart>
            <img src={coffes} />
            <div>
              <p className='titleCoffe'>Expresso Tradicional</p> 
              <div className='buttons'>
                <div className="quantity">
                  <div className="buttonMinus">
                    <Minus weight="bold"/>
                  </div>
                    0
                  <div className="buttonPlus">
                    <Plus weight="bold"/>
                  </div>
                
                </div>
                <button>
                  <Trash size={20}/>
                  <p>REMOVER</p>
                </button>  
              </div>
              
            </div>
          </Styles.ItemCart>
          <hr color='#E6E5E5' width = "100%" size="2" />
          <Styles.TotalCart>
            <div className='totalItens'>
              <span>Total de itens</span>
              <small>R$ 20.70</small>
            </div>
            <div className='entrega'>
              <span>Entrega</span>
              <small>R$ 20.70</small>
            </div>
            <div className='total'>
              <span>TOTAL</span>
              <small>R$ 20.70</small>
            </div>

          </Styles.TotalCart>
          <Styles.ConfirmarPedidoButton>CONFIRMAR PEDIDO</Styles.ConfirmarPedidoButton>
        </Styles.CartProduct>
        </Styles.OrderCart>
      </Styles.ContainerCheckout>
    </Styles.Conteiner>
  )
}