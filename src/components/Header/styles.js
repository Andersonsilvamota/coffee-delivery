import styled from "styled-components";


export const ContainerHeader = styled.div`
  width: 100%;
  padding: 4rem 15rem 1rem ;

  display: flex;
  justify-content: center;
` 

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 6.5rem;
  //padding: 2rem 15rem;
  width: 100%;
  max-width: 90rem;
  margin-right: auto;
  margin-left: auto;

  //border: 1px solid red;
`

export const LogoImg = styled.img`
  width: 5rem;
  height: 2.5rem;
`

export const Navigation = styled.nav`
  width: 12rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

`

export const Localization = styled.a`
  text-decoration: none;
  height: 2.5rem;
  width: 9rem;

  background-color: ${props => props.theme.produto['purple-light']};
  color: ${props => props.theme.produto['purple-dark']};
  padding: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 6px;

`
export const Cart = styled.div`
  background-color: ${props => props.theme.produto['yellow-light']};
  padding: 8px;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 6px;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    background-color: ${props => props.theme.produto['yellow-dark']};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    border-radius: 50%;
    padding: 4px;
  }
`