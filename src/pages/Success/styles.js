import styled from "styled-components";

export const Conteiner = styled.div`
  padding: 2rem 15rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`

export const ContentLeft = styled.div`

  h1{
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 900;
    color: ${props => props.theme.produto['yellow-dark']};
  }
  p{
    font-family: 'Roboto';
    font-size: 1.25rem;
    
    color: ${props => props.theme.base['base-subtitle']};
  }

`
export const InfoDelivery = styled.div`
  margin-top: 2rem;
  border-radius: 6px 36px 6px 36px;
  min-width: 32rem;
  position: relative;
  background-color: ${props => props.theme.base['background']};
  padding: 2rem 0 2rem 3rem;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
  }

  .conteiner-info {
    display: flex;
    padding: 1rem 0;
    gap: 1rem;

    p {
      font-size: 1rem;
      line-height: 130%;
    }
  }

  .icon {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${props => props.theme.base['white']};
  }

  .icon-map {
    background-color: ${props => props.theme.produto['purple']};
  }
  .icon-timer {
    background-color: ${props => props.theme.produto['yellow']};
  }
  .icon-dolar {
    background-color: ${props => props.theme.produto['yellow-dark']};
  }
`

export const ContentRight = styled.div`
  margin: 7rem 1rem 0 0;
`