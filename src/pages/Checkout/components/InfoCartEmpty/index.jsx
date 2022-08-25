import { ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import * as Styles from './styles'

export function InfoCartEmpty() {
  const navigate = useNavigate();

  async function handleToPageInicial() {
    await new Promise(resolve => setTimeout(resolve, 100))
    navigate("/")
  }

  return (
    <Styles.ContainerCartEmpty>
      <ShoppingCart size={50} />
      <Styles.TextoInfo>
        OPS... não há itens no seu carrinho. adicione algum produto na página de produtos.
      </Styles.TextoInfo>
      <p>Vá para página inicial ou clique no botão abaixo</p>
      <Styles.ButtonReturnHome onClick={handleToPageInicial}>
        VOLTAR PARA A PÁGINA INICIAL
      </Styles.ButtonReturnHome>
    </Styles.ContainerCartEmpty>
  )
}