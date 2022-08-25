import { ShoppingCart } from 'phosphor-react'
import * as Styles from './styles'

export function InfoCartEmpty() {
  return (
    <Styles.ContainerCartEmpty>
      <ShoppingCart size={50} />
      <Styles.TextoInfo>OPS... não há itens no seu carrinho. adicione algum produto na página de produtos.</Styles.TextoInfo>
      <p>Vá para página inicial ou clique no botão abaixo</p>
      <Styles.ButtonReturnHome>VOLTAR PARA A PÁGINA INICIAL</Styles.ButtonReturnHome>
    </Styles.ContainerCartEmpty>
  )
}