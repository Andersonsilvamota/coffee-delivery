import * as Styles from './styles'
import { CurrencyDollar, MapPinLine, CreditCard, Bank, Money, Minus, Plus, Trash } from 'phosphor-react'
import coffes from '../../assets/Coffee.png'
import { TitleSubtitleIcon } from '../../components/TitleSubtitleIcon'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useForm } from 'react-hook-form'

export function Checkout(){
  const {register, handleSubmit} = useForm()
  const { cartItems, valueFinal, valueItems, deliveryValue, changeQuantity, removeCoffeeToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  const [data, setData] = useState("");
  const [method, setMethod] = useState('') // pode começar vazio, pra não setar nenhum

  console.log(data)

  function handleChangeQuantity(item, name){
    changeQuantity(item, name)
  }

  function handleDeleteCoffeToCart(id){
    removeCoffeeToCart(id)
  }

  return(
    <Styles.Conteiner>
      <Styles.ContainerCheckout onSubmit={handleSubmit(data => setData(JSON.stringify(data)))}>
        <Styles.ContentCompletOrder>
        <h2>Complete seu pedido</h2>

        <Styles.ContentAddress>
          <TitleSubtitleIcon
              title="Endereço de Entrega"
              subtitle="Informe o endereço onde deseja receber o pedido"
              icon={<MapPinLine color={'#C47F17'} size={22} />}
            />
          
          <div className='form'>
            <input {...register("cep")} className='cep' placeholder='CEP'/>
            <input {...register("rua")} className='street' placeholder='Rua'/>
            <input {...register("numero")} placeholder='Número'/>
            <input {...register("complemento")} className='complement' placeholder='Complemento'/>
            <input {...register("bairro")} placeholder='Bairro'/>
            <input {...register("cidade")} placeholder='Cidade'/>
            <input {...register("uf")} placeholder='UF'/>
          </div>
        </Styles.ContentAddress>
        <Styles.ContentAddress>
          <TitleSubtitleIcon
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={<CurrencyDollar color={'#8047F8'} size={22} />}
          />
          <Styles.Buttons>
            <Styles.ButtonPay 
              type="button"
              onClick={() => setMethod("credit")}
              isActive={method === 'credit'}
              activeColor="#f0f"
            >
              {/* <input id="credito" type="radio" /> */}
             
                <div className='icon'><CreditCard size={18}/></div>
                <small>CARTÃO DE CRÉDITO</small>

            </Styles.ButtonPay>
            <Styles.ButtonPay 
              type="button"
              onClick={() => setMethod("debit")}
              isActive={method === 'debit'}
              activeColor="#f0f">
              {/* <input id="debito" type="radio" /> */}
                <div className='icon'> <Bank size={18}/></div>
                <small>CARTÃO DE DÉBITO</small>

              
            </Styles.ButtonPay>
            <Styles.ButtonPay 
              type="button"
              onClick={() => setMethod("money")}
              isActive={method === 'money'}
              activeColor="#f0f">
              
                <div className='icon'><Money size={18}/></div>
                <small>DINHEIRO</small>
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
                <button className='remove' onClick={() => handleDeleteCoffeToCart(item.id)}>
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
          <Styles.ConfirmarPedidoButton type="submit">CONFIRMAR PEDIDO</Styles.ConfirmarPedidoButton>
        </Styles.CartProduct>
        </Styles.OrderCart>
      </Styles.ContainerCheckout>
    </Styles.Conteiner>
  )
}