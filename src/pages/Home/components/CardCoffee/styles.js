import styled from "styled-components"

export const ContentCoffe = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.6rem;
  row-gap: 2.5rem;

`

export const CardCoffee = styled.div`
  background-color: ${props => props.theme.base['base-card']};
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px; 
  padding: 0 1.25rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    margin-top: -20px;
  }
  p {
    font-family: Roboto;
    font-style: Regular;
    font-size: 14px;
    line-height: 130%;

  }
  .tags {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
  .tag {
    background-color: ${props => props.theme.produto['yellow-light']};
    color: ${props => props.theme.produto['yellow-dark']};
    padding: 4px 8px;
    border-radius: 100px;
    font-family: 'Roboto';
    font-size: 10px;
    margin-top: 12px;
    margin-bottom: 16px;
    text-transform: uppercase;
  }

  h3 {
    margin-bottom: 8px;
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 20px;
    
    color: ${props => props.theme.base['base-subtitle']};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 13rem;
    height: 2.375rem;
    margin-top: 33px;

    .quantity {
      display: flex;
      flex-direction: row;
      gap: 8px;
      background-color: ${props => props.theme.base['base-button']};
      padding: 8.5px 8px;
      border-radius: 6px;
      svg {
        color: ${props => props.theme.produto['purple']};

      }

      svg:hover {
        color: ${props => props.theme.produto['purple-dark']};
        cursor: pointer;

      }
    }
  }
  .cartButton {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    width: 36px;
    height: 36px;
    padding: 8px;
    background-color: ${props => props.theme.produto['purple-dark']};
    
    &:hover {
      background-color: ${props => props.theme.produto['purple']};
      cursor: pointer;
    }
  }
 
`