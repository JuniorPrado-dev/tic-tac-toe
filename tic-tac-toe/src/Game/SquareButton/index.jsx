/* eslint-disable react/prop-types */
import { SquareButton } from './style';

// Componente de quadrado individual do tabuleiro
const Square = ({ value, onClick }) => {
  return (
    // Botão que exibe "X", "O" ou nada, dependendo do valor recebido
    <SquareButton onClick={onClick}>
      {value}
    </SquareButton>
  );
};

export default Square;
