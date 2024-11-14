import { useState } from 'react';
import  Square from './SquareButton';
import { Board, Status } from './style';

// Componente principal do Jogo da Velha, onde ocorre toda a lógica do jogo
const Game = () => {
  // Estado para armazenar o valor de cada quadrado (X, O ou null)
  const [squares, setSquares] = useState(Array(9).fill(null));
  // Estado para alternar o jogador entre "X" e "O"
  const [isXNext, setIsXNext] = useState(true);

  // Função para verificar se há um vencedor
  const calculateWinner = (squares) => {
    // Posições de todas as combinações vencedoras
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    // Itera sobre cada combinação para verificar se há um vencedor
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null; // Retorna null se não houver vencedor
  };

  // Calcula o vencedor atual (se houver) e define a mensagem de status
  const winner = calculateWinner(squares);
  const status = winner ? `Vencedor: ${winner}` : `Próximo jogador: ${isXNext ? 'X' : 'O'}`;

  // Manipula o clique em um quadrado do tabuleiro
  const handleClick = (index) => {
    // Impede alterações se já houver um vencedor ou o quadrado já tiver um valor
    if (squares[index] || winner) return;
    // Copia o array de quadrados e marca a posição clicada com "X" ou "O"
    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares); // Atualiza o estado dos quadrados
    setIsXNext(!isXNext); // Alterna para o próximo jogador
  };

  // Reinicia o jogo, limpando o tabuleiro e reiniciando o jogador
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div>
      <Status>{status}</Status>
      <Board>
        {/* Mapeia o array de quadrados para exibir cada componente Square */}
        {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </Board>
      <button onClick={resetGame}>Reiniciar Jogo</button>
    </div>
  );
};

export default Game;
