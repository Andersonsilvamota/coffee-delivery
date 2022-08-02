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
  border-radius: 6px 36px;
  border: 2px solid;
  border-image: linear-gradient(90deg, #DBAC2C , #8047F8);
  border-image-slice: 1;
  
  
  //border: 1px solid;
  //border-color: linear-gradient(to top, #3acfd5 0%, #3a4ed5 100%);
  //-webkit-border-image: -webkit-gradient(linear, left top, left bottom, from(#00abeb), to(#fff), color-stop(0.5, #fff), color-stop(0.5, #66cc00)) 21 30 30 21 repeat repeat;

 
  padding: 2rem 0 2rem 3rem;

 

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
    //gap: 1rem;
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