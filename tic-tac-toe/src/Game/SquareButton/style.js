import styled from 'styled-components';

// Define o estilo do tabuleiro com uma grade de 3x3
export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 5px;
  margin: 20px;
`;

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

// Define o estilo da mensagem de status do jogo
export const Status = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;
