import React, { useState } from "react";
import type { ComponentProps } from "react";

// Paint drop icon for counting
const PaintDropSvg = (props: ComponentProps<"svg">) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 4C20 4 10 14 10 24C10 29.5228 14.4772 34 20 34C25.5228 34 30 29.5228 30 24C30 14 20 4 20 4Z"
      fill="currentColor"
    />
  </svg>
);

// Penny the Painter character
const PennyCharacter = () => (
  <div className="flex items-center justify-center">
    <div className="relative">
      <div className="h-20 w-20 rounded-full bg-pink-400 p-4">
        <span className="text-4xl">🎨</span>
      </div>
      <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-yellow-400 p-1">
        <span className="text-sm">✨</span>
      </div>
    </div>
  </div>
);

type GameState = "intro" | "playing" | "won" | "lost";
type Player = "X" | "O" | null;

interface TicTacToeGameProps {
  onComplete: (won: boolean) => void;
  onExit: () => void;
}

export const TicTacToeGame: React.FC<TicTacToeGameProps> = ({
  onComplete,
  onExit,
}) => {
  const [gameState, setGameState] = useState<GameState>("intro");
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [currentProblem, setCurrentProblem] = useState<{
    count: number;
    options: number[];
    targetSquare: number;
  } | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  // Generate a counting problem
  const generateProblem = (square: number) => {
    const count = Math.floor(Math.random() * 10) + 1; // 1-10
    const correctAnswer = count;
    const wrongAnswers = [
      count - 1 > 0 ? count - 1 : count + 2,
      count + 1 <= 10 ? count + 1 : count - 2,
    ].filter((n) => n !== correctAnswer);
    
    const options = [correctAnswer, ...wrongAnswers]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    return {
      count,
      options,
      targetSquare: square,
    };
  };

  // Check for winner
  const checkWinner = (squares: Player[]): Player => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (a !== undefined && b !== undefined && c !== undefined &&
          squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  // Make AI move (super easy - random)
  const makeAIMove = () => {
    const emptySquares = board
      .map((val, idx) => (val === null ? idx : null))
      .filter((val) => val !== null);

    if (emptySquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      const randomSquare = emptySquares[randomIndex];
      if (randomSquare === undefined) return;
      const newBoard = [...board];
      newBoard[randomSquare] = "O";
      setBoard(newBoard);
      
      const winner = checkWinner(newBoard);
      if (winner === "O") {
        setGameState("lost");
      } else if (!newBoard.includes(null)) {
        setGameState("won"); // Tie counts as win for easy mode
      } else {
        setIsPlayerTurn(true);
      }
    }
  };

  // Handle square click
  const handleSquareClick = (index: number) => {
    if (!isPlayerTurn || board[index] !== null || gameState !== "playing") return;
    
    setCurrentProblem(generateProblem(index));
  };

  // Handle answer selection
  const handleAnswer = (answer: number) => {
    if (!currentProblem) return;

    const isCorrect = answer === currentProblem.count;
    
    if (isCorrect) {
      const newBoard = [...board];
      newBoard[currentProblem.targetSquare] = "X";
      setBoard(newBoard);
      
      setFeedbackMessage("Great job! 🎉");
      setShowFeedback(true);
      
      setTimeout(() => {
        setShowFeedback(false);
        setCurrentProblem(null);
        
        const winner = checkWinner(newBoard);
        if (winner === "X") {
          setGameState("won");
        } else if (!newBoard.includes(null)) {
          setGameState("won"); // Tie counts as win
        } else {
          setIsPlayerTurn(false);
          setTimeout(() => makeAIMove(), 1000);
        }
      }, 1500);
    } else {
      setFeedbackMessage("Try again! 🎨");
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 1500);
    }
  };

  // Render game based on state
  if (gameState === "intro") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-purple-50 p-8">
        <div className="max-w-2xl text-center">
          <PennyCharacter />
          <h1 className="mt-6 text-3xl font-bold text-gray-800">
            Help Penny Count Colors!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Penny's magical paintbrush has lost its colors! Help her collect colors by counting paint drops and playing Tic-tac-toe.
          </p>
          <button
            onClick={() => setGameState("playing")}
            className="mt-8 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 text-xl font-bold text-white shadow-lg transition hover:scale-105"
          >
            Let's Play! 🎮
          </button>
        </div>
      </div>
    );
  }

  if (gameState === "won") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-green-50 to-blue-50 p-8">
        <div className="text-center">
          <div className="text-6xl">🏆</div>
          <h1 className="mt-6 text-4xl font-bold text-green-600">
            Amazing! You Won!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            You helped Penny collect her colors!
          </p>
          <button
            onClick={() => onComplete(true)}
            className="mt-8 rounded-xl bg-green-500 px-8 py-4 text-xl font-bold text-white shadow-lg transition hover:bg-green-600"
          >
            Continue ✨
          </button>
        </div>
      </div>
    );
  }

  if (gameState === "lost") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-red-50 p-8">
        <div className="text-center">
          <div className="text-6xl">🎨</div>
          <h1 className="mt-6 text-4xl font-bold text-orange-600">
            Good Try!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Let's try again to help Penny!
          </p>
          <button
            onClick={() => {
              setBoard(Array(9).fill(null));
              setGameState("playing");
              setIsPlayerTurn(true);
            }}
            className="mt-8 rounded-xl bg-orange-500 px-8 py-4 text-xl font-bold text-white shadow-lg transition hover:bg-orange-600"
          >
            Try Again 🔄
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <button
          onClick={onExit}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-lg font-bold text-gray-800">
          {isPlayerTurn ? "Your Turn! 🎨" : "Penny's Turn 🎯"}
        </div>
      </header>

      {/* Game Area */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="flex flex-col items-center gap-8">
          {/* Penny Helper */}
          <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-lg">
            <PennyCharacter />
            <div className="max-w-xs">
              <p className="text-sm font-medium text-gray-800">
                {currentProblem
                  ? "Count the paint drops!"
                  : isPlayerTurn
                  ? "Click an empty square to play!"
                  : "Watch me paint!"}
              </p>
            </div>
          </div>

          {/* Tic-tac-toe Board */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-2 rounded-2xl bg-white p-4 shadow-xl">
              {board.map((square, index) => (
                <button
                  key={index}
                  onClick={() => handleSquareClick(index)}
                  disabled={!isPlayerTurn || square !== null || currentProblem !== null}
                  className={`
                    h-24 w-24 rounded-xl text-4xl font-bold transition-all
                    ${square === null 
                      ? "bg-gray-100 hover:bg-gray-200" 
                      : square === "X" 
                      ? "bg-pink-200 text-pink-600" 
                      : "bg-purple-200 text-purple-600"}
                    ${!isPlayerTurn || square !== null || currentProblem !== null
                      ? "cursor-not-allowed" 
                      : "cursor-pointer hover:scale-105"}
                  `}
                >
                  {square}
                </button>
              ))}
            </div>

            {/* Feedback Message */}
            {showFeedback && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-xl bg-white p-4 shadow-2xl">
                  <p className="text-2xl font-bold text-gray-800">{feedbackMessage}</p>
                </div>
              </div>
            )}
          </div>

          {/* Counting Problem */}
          {currentProblem && !showFeedback && (
            <div className="rounded-2xl bg-white p-6 shadow-xl">
              <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
                Count the paint drops!
              </h3>
              <div className="mb-6 flex justify-center gap-2">
                {Array.from({ length: currentProblem.count }).map((_, i) => (
                  <PaintDropSvg 
                    key={i} 
                    className="text-pink-500"
                    style={{
                      animation: `bounce ${0.5 + i * 0.1}s ease-in-out`,
                      color: `hsl(${330 + i * 10}, 70%, 60%)`,
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-4 justify-center">
                {currentProblem.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-xl font-bold text-white shadow-lg transition hover:scale-105"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Help Button */}
          <button
            className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-gray-800 shadow-lg transition hover:bg-yellow-500"
          >
            I Don't Understand 🤔
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}; 