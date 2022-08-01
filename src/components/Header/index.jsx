import logo from '../../assets/logo.svg'
import {MapPin, ShoppingCart} from 'phosphor-react'
import  * as Styles from './styles'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header(){
  const {quantityInCart} = useContext(CartContext)

  return (
    <Styles.ContainerHeader>
      <Styles.Header>
        <Link to='/'>
          <Styles.LogoImg src={logo} />
        </Link>
        <Styles.Navigation>
          <Styles.Localization href='#'>
            <MapPin size={22} color="#8047F8" weight="fill" />
            Fortaleza, CE
          </Styles.Localization>
          <Link to='checkout'>
            <Styles.Cart>
              {quantityInCart >= 1 && <span>{quantityInCart}</span>}
              <ShoppingCart size={22} color="#C47F17" weight="fill"/>
            </Styles.Cart>
          </Link>
        </Styles.Navigation>
      </Styles.Header>
    </Styles.ContainerHeader>
  )
}