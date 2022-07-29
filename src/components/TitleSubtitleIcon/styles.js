import styled from "styled-components";

export const Title = styled.div`

  display: flex;
  gap: 0.5rem;
  padding-bottom: 1rem;

  svg {
    color: ${props => props.theme.produto['yellow-dark']};
  }

  h3 {
    //roboto- texto regular m
    font-size: 1rem;
    line-height: 130%;
    font-weight: normal;
    color: ${props => props.theme.base['base-subtitle']};
  }

  p {
    //texto regular s
    font-size: 0.875rem;
    line-height: 130%;
    color: ${props => props.theme.base['base-text']};

  }
` 
