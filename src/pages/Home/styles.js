import styled from "styled-components";

export const ConteinerHome = styled.div`
  padding: 0 15rem;
`

export const ConteinerBanner = styled.div`
  width: 100%;
  height: 34rem;
  max-width: 90rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;

`

export const ContentLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;

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

export const ContentCoffe = styled.div`
  //margin-top: 4rem;
  width: 100%;
  max-width: 90rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.6rem;
  row-gap: 2.5rem;

`