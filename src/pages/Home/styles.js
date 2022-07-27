import styled from "styled-components";

export const ConteinerHome = styled.div`
  padding: 0 15rem;
`

export const ConteinerBanner = styled.div`
  width: 100%;
  height: 34rem;
  max-width: 120rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
`

export const ContentLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 6rem 0;

  h2 {
    font-size: 48px;
    color: ${props => props.theme.base['base-title']};
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    text-align: start;
    margin-bottom: 1rem;

  }
  p {
    color: ${props => props.theme.base['base-subtitle']};
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }
  div {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
  }

  span {
    display: flex;
    gap: 1rem;
    height: 2rem;
    align-items: center;
    
    strong {
      font-size: 1rem;
      color: ${props => props.theme.base['base-text']};
      font-weight: normal;

    }
    .icon {
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
    }

    .iconCart {
      background-color: ${props => props.theme.produto['yellow-dark']};
    }

    .iconPackage {
      background-color: ${props => props.theme.base['base-text']};
    }
    .iconTimer {
      background-color: ${props => props.theme.produto['yellow']};
    }
    .iconCoffee {
      background-color: ${props => props.theme.produto['purple']};
    }
    svg {
      color: ${props => props.theme.base['white']};
    }

  }
`
export const ContentRight = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: end;

  img {
    min-width: 20rem;
    min-height: 20rem;
    width: 30rem;
    height: 30rem;
  }
`


//cards cafe
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

  .tag {
    background-color: ${props => props.theme.produto['yellow-light']};
    color: ${props => props.theme.produto['yellow-dark']};
    padding: 4px 8px;
    border-radius: 100px;
    font-family: 'Roboto';
    font-size: 10px;
    margin-top: 12px;
    margin-bottom: 16px;
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
    }
  }

  .cartButton {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    width: 38px;
    height: 38px;
    padding: 8;
    background-color: ${props => props.theme.produto['purple-dark']};
  }
 
`