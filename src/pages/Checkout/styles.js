import styled from "styled-components";

export const Conteiner = styled.div`
  padding: 2rem 15rem;
  h2 {
    font-family: 'Baloo 2';
    font-size: 18px;
    color: ${props => props.theme.base['base-subtitle']};

  }
`

export const ContainerCheckout = styled.div`
  width: 100%;
  height: 34rem;
  max-width: 120rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  //flex-direction: column;
  padding: 1rem 0;

`

export const ContentAddress = styled.div`
  width: 40rem;
  height: 23.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2.5rem;
  background-color: ${props => props.theme.base['base-card']};

  .title {
    display: flex;
    gap: 0.5rem;
    padding-bottom: 1rem;

    svg {
      color: ${props => props.theme.produto['yellow-dark']};
    }
  }

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
  border: 1px solid red;

  h2 {
    font-family: 'Baloo 2';
    font-size: 18px;
    color: ${props => props.theme.base['base-subtitle']};

  }
`