import styled from "styled-components";

export const ContainerCartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  svg {
    color: ${props => props.theme.produto['purple-dark']};
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
    color: ${props => props.theme.base['base-title']};
  }
`


export const TextoInfo = styled.strong`
  font-weight: bold;
  font-size: 1.2rem;
  color: ${props => props.theme.produto['purple-dark']};
`

export const ButtonReturnHome = styled.button`
  width: 20rem;
  height: 4rem;
  border-radius: 6px;
  padding: 6px;
  font-weight: bold;
  background-color: transparent;
  color: ${props => props.theme.produto['yellow']};
  border: 1px solid ${props => props.theme.produto['yellow']};
  cursor: pointer;
  transform: scale();

  &:hover {
    color: #fff;
    background-color: ${props => props.theme.produto['yellow']};
    border-color: ${props => props.theme.produto['yellow']};
    transition: background-color 0.6s, color 0.6s, border-color 0.6s;

   
    

  }
`