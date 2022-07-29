import styled from "styled-components";

export const Conteiner = styled.div`
  padding: 2rem 15rem;

  h2 {
    font-family: 'Baloo 2';
    font-size: 18px;
    color: ${props => props.theme.base['base-subtitle']};
    margin-bottom: 2rem;

  }
`

export const ContainerCheckout = styled.div`
  width: 100%;
  height: 34rem;
  max-width: 120rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  gap: 3rem;
  //flex-direction: column;
  padding: 1rem 0;



`

export const ContentCompletOrder = styled.div`
  height: 36.9375rem;
`

export const ContentAddress = styled.div`
  width: 40rem;
  //height: 23.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 12px;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${props => props.theme.base['base-card']};

  .form {
    width: 100%;
    display: grid;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-auto-flow: dense;

    .cep {
      grid-column: span 3;
      max-width: 12.5rem;
    }

    .street {
      grid-column: span 3;
    }

    .complement {
      grid-column: span 2;
    }
  } 

  h2 {
    font-family: 'Baloo 2';
    font-size: 18px;
    color: ${props => props.theme.base['base-subtitle']};

  }

  div input {
    height: 2.625rem;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.base['base-button']};
    background-color: ${props => props.theme.base['base-input']};
    transition: 0.4s;

    /* &:focus {
      border-color:  ${props => props.theme.base['base-input']};;
    } */

    color:  ${props => props.theme.base['base-text']};
    font-size: 0.75rem;
    padding: 0 0.75rem;

    &::placeholder {
      color: ${props => props.theme.base['base-label']};

    }
  }  
`

export const OrderCart = styled.div`
  width: 28rem;
  
  h2 {
    font-family: 'Baloo 2';
    font-size: 18px;
    color: ${props => props.theme.base['base-subtitle']};

  }
`
export const CartProduct = styled.div`

  background-color: ${props => props.theme.base['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;
  
`
export const ItemCart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-bottom: 3rem;
  padding-top: 2rem;
  
  .titleCoffe {
    padding-bottom: 0.5rem;
    color: ${props => props.theme.base['base-subtitle']};
    font-size: 1rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  img{
    width: 4.25rem;
    height: 4.25rem;
  }
  .buttons {
      display: flex;
      gap: 6px;
      height: 2rem;
    }
  .quantity {
      display: flex;
      flex-direction: row;
      height: 2.5rem;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      background-color: ${props => props.theme.base['base-button']};
      padding: 8.5px;
      border-radius: 6px;
      svg {
        color: ${props => props.theme.produto['purple']};
      }

      svg:hover {
        color: ${props => props.theme.produto['purple-dark']};
        cursor: pointer;
      }
  }

  button {
    border: none;
    background-color: ${props => props.theme.base['base-button']};
    height: 2.5rem;
    padding: 8.5px ;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    
    p {
      color: ${props => props.theme.base['base-text']};
    }

    svg {
      color: ${props => props.theme.produto['purple']};
    }
    svg:hover {
        color: ${props => props.theme.produto['purple-dark']};
        cursor: pointer;
      }
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`

export const ButtonPay = styled.button`
  border: none;
  width: 12rem;
  height: 3.125rem;
  padding: 12px 10px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  justify-content: space-between;
  background-color:${props => props.theme.base['base-button']} ;
  svg {
    color: ${props => props.theme.produto['purple']};
  }

`

export const TotalCart = styled.div`

  .totalItens, .entrega, .total{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
  }

  .total{
    font-weight: bold;
  }
`

export const ConfirmarPedidoButton = styled.button`
  border: none;
  padding: 1rem;
  width: 100%;
  border-radius: 6px;
  background-color: ${props => props.theme.produto['yellow']};
  color: ${props => props.theme.base['white']};
`