import styled from 'styled-components';

// Define o estilo do botão de cada quadrado
export const SquareButton = styled.button`
  width: 100px;
  height: 100px;
  font-size: 24px;
  background-color: #fff;
  border: 2px solid #000;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0; // Muda a cor de fundo ao passar o mouse
  }
`;
