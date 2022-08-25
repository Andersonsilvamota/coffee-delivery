import * as Styles from './styles'
import { CurrencyDollar, MapPinLine, CreditCard, Bank, Money, Minus, Plus, Trash } from 'phosphor-react'
import coffes from '../../assets/Coffee.png'
import { TitleSubtitleIcon } from '../../components/TitleSubtitleIcon'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

const schema = yup.object({
  cep: yup.number().min(8, 'Cep inválido').required(),
  street: yup.string().min(1, 'Informe a Rua').required(),
  number: yup.number().min(1, 'Informe o número').integer().required(),
  complement: yup.string(),
  district: yup.string().min(3, 'Informe o Bairro').required(),
  city: yup.string().min(3, 'Informe a Cidade').required(),
  state: yup.string().min(2, 'Informe o Estado').required(),
  method: yup.string().min(1, 'Informe o Método de pagamento').required(), 
}).required() 

export function Checkout(){
  const {register, handleSubmit, setValue, formState:{ errors, isSubmitting }} = useForm({
    resolver: yupResolver(schema)
  })

  const navigate = useNavigate();

  const { cartItems, valueFinal, valueItems, deliveryValue, changeQuantity, removeCoffeeToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  const [data, setData] = useState("");
  const [method, setMethod] = useState('') // pode começar vazio, pra não setar nenhum

  

  //console.log(data)
  //console.log(errors.cep?.message)

  const erro = errors.street?.message

  function handleChangeQuantity(item, name){
    changeQuantity(item, name)
  }

  function handleDeleteCoffeToCart(id){
    removeCoffeeToCart(id)
  }

  async function handleSave(data){
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    navigate("/success",{
      state: data,
    })
  }

  return(
    <Styles.Conteiner>
      <Styles.ContainerCheckout onSubmit={handleSubmit(handleSave)}>
        <Styles.ContentCompletOrder>
        <h2>Complete seu pedido</h2>

        <Styles.ContentAddress>
          <TitleSubtitleIcon
              title="Endereço de Entrega"
              subtitle="Informe o endereço onde deseja receber o pedido"
              icon={<MapPinLine color={'#C47F17'} size={22} />}
            />
          
          <div className='form'>
            <input 
              {...register("cep")} 
              autocomplete="off" 
              className='cep' 
              type="number" 
              placeholder='CEP*'
            />
            {errors.cep && <span className='erro-cep'>Informe o cep</span>}
            <input 
              {...register("street")} 
              autocomplete="off" 
              className='street' 
              placeholder='Rua*'
            />
            {errors.street && <span className='erro-street'>Informe a rua</span>}            
            <input 
              {...register("number")} 
              autocomplete="off" 
              placeholder='Número*'
            />
            {errors.number && <span className='erro'>Informe o número</span>}
            <input
              {...register("complement")} 
              autocomplete="off" 
              className='complement' 
              placeholder='Complemento'
            />
            <input 
              {...register("district")} 
              autocomplete="off" 
              placeholder='Bairro*'
            />
            {errors.district && <span className='erro'>Informe o bairro</span>}
            <input 
              {...register("city")} 
              autocomplete="off" 
              placeholder='Cidade*'
            />
            {errors.city && <span className='erro'>Informe a cidade</span>}
            <input 
              {...register("state")} 
              autocomplete="off" 
              placeholder='UF*'/>
            {errors.state && <span className='erro'>Informe a UF</span>}
          </div>
        </Styles.ContentAddress>
        <Styles.ContentAddress>
          <TitleSubtitleIcon
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={<CurrencyDollar color={'#8047F8'} size={22} />}
          />
          <Styles.Buttons >
            <Styles.ButtonPay 
              type="button"
              onClick={() => {
                setValue("method", "credit")
                setMethod("credit")}
              }
              isActive={method === 'credit'}
              activeColor="#f0f"
              //value={value}
            >
              <div className='icon'><CreditCard size={18}/></div>
              <small>CARTÃO DE CRÉDITO</small>
            </Styles.ButtonPay>
            <Styles.ButtonPay 
              type="button"
              onClick={() => {
                setValue("method", "debit")
                setMethod("debit")}
              }
              isActive={method === 'debit'}
              activeColor="#f0f"
              //value={method}
              //{...register("methodPayment", {required: true})}
            >
              <div className='icon'><Bank size={18}/></div>
              <small>CARTÃO DE DÉBITO</small>
            </Styles.ButtonPay>
            <Styles.ButtonPay 
              type="button"
              onClick={() => {
                setValue("method", "money")
                setMethod("money")}
              }
              isActive={method === 'money'}
              activeColor="#f0f"
              //value={method}
              //{...register("methodPayment", {required: true})}
            >
              <div className='icon'><Money size={18}/></div>
              <small>DINHEIRO</small>
            </Styles.ButtonPay>
            
          </Styles.Buttons>
          {(errors.method && !method) && <span className='erro-metodo-pagamento'>Informe a forma de pagamento</span>}

        </Styles.ContentAddress>
        </Styles.ContentCompletOrder>
        <Styles.OrderCart>
        <h2>Cafés selecionados</h2>
        <Styles.CartProduct>
          {cartItems.map(item => (
            <Styles.ItemCart key={item.id}>
            <>
              <img src={`/coffes/${item.photo}`} />
              <div>
                <p className='titleCoffe'>{item.name}</p> 
                <div className='buttons'>
                  <div className="quantity">
                    <button type='button' className="buttonMinus" disabled={item.quantity <= 1} onClick={() => handleChangeQuantity(item, 'decrement')}>
                      <Minus size={14} weight="bold"  />
                    </button>
                      {item.quantity}
                    <button type='button' className="buttonPlus" onClick={() => handleChangeQuantity(item, 'increment')}>
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
          <Styles.ConfirmarPedidoButton disabled={isSubmitting} type="submit">CONFIRMAR PEDIDO</Styles.ConfirmarPedidoButton>
        </Styles.CartProduct>
        </Styles.OrderCart>
      </Styles.ContainerCheckout>
    </Styles.Conteiner>
  )
}