import React, { useState, useEffect } from "react";
import type { ComponentProps } from "react";

// Paint drop icon for counting
const PaintDropSvg = (props: ComponentProps<"svg">) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 3C15 3 7 11 7 18C7 22.4183 10.5817 26 15 26C19.4183 26 23 22.4183 23 18C23 11 15 3 15 3Z"
      fill="currentColor"
    />
  </svg>
);

// Paint splash effect for correct answers
const PaintSplashSvg = (props: ComponentProps<"svg">) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M40 10C40 10 25 20 20 35C15 50 25 65 40 65C55 65 65 50 60 35C55 20 40 10 40 10Z"
      fill="currentColor"
      opacity="0.8"
    />
    <circle cx="25" cy="25" r="5" fill="currentColor" opacity="0.6" />
    <circle cx="55" cy="30" r="4" fill="currentColor" opacity="0.7" />
    <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.5" />
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
type SquareState = "empty" | "correct" | "blocked";

// Generate addition problems - moved outside component to avoid useEffect dependency warning
const generateProblems = () => {
  const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#F7DC6F", "#BB8FCE", "#85C1E9"];
  const problemTemplates = [
    { num1: 1, num2: 1 },
    { num1: 2, num2: 1 },
    { num1: 1, num2: 2 },
    { num1: 2, num2: 2 },
    { num1: 3, num2: 1 },
    { num1: 1, num2: 3 },
    { num1: 3, num2: 2 },
    { num1: 2, num2: 3 },
    { num1: 3, num2: 3 },
  ];

  return problemTemplates.map(template => ({
    ...template,
    answer: template.num1 + template.num2,
    color1: colors[Math.floor(Math.random() * colors.length)] ?? "#FF6B6B",
    color2: colors[Math.floor(Math.random() * colors.length)] ?? "#4ECDC4",
  }));
};

interface BingoSquare {
  id: number;
  state: SquareState;
  problem?: {
    num1: number;
    num2: number;
    answer: number;
    color1: string;
    color2: string;
  };
}

interface BingoGameProps {
  onComplete: (won: boolean) => void;
  onExit: () => void;
}

export const BingoGame: React.FC<BingoGameProps> = ({
  onComplete,
  onExit,
}) => {
  const [gameState, setGameState] = useState<GameState>("intro");
  const [board, setBoard] = useState<BingoSquare[]>([]);
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  // Initialize board with problems
  useEffect(() => {
    const problems = generateProblems();
    const newBoard: BingoSquare[] = Array(9).fill(null).map((_, index) => ({
      id: index,
      state: "empty",
      problem: problems[index],
    }));
    setBoard(newBoard);
  }, []);

  // Check for winning lines
  const checkWin = (squares: BingoSquare[]): number[] => {
    const lines = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal \
      [2, 4, 6], // Diagonal /
    ];

    const winningLines: number[] = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;
      const [a, b, c] = line;
      if (a !== undefined && b !== undefined && c !== undefined &&
          squares[a]?.state === "correct" && 
          squares[b]?.state === "correct" && 
          squares[c]?.state === "correct") {
        winningLines.push(i);
      }
    }

    return winningLines;
  };

  // Handle square selection
  const handleSquareClick = (index: number) => {
    if (board[index]?.state !== "empty" || gameState !== "playing") return;
    setSelectedSquare(index);
  };

  // Handle answer selection
  const handleAnswer = (answer: number) => {
    if (selectedSquare === null || !board[selectedSquare]?.problem) return;

    const isCorrect = answer === board[selectedSquare]?.problem?.answer;
    
    const newBoard = [...board];
    const currentSquare = newBoard[selectedSquare];
    if (currentSquare) {
      newBoard[selectedSquare] = {
        ...currentSquare,
        state: isCorrect ? "correct" : "blocked",
      };
    }
    setBoard(newBoard);

    if (isCorrect) {
      setFeedbackMessage("Great job! 🎉");
      const winningLines = checkWin(newBoard);
      
      if (winningLines.length > 0) {
        setTimeout(() => setGameState("won"), 1500);
      }
    } else {
      setFeedbackMessage("Try another square! 🎨");
      
      // Check if player can still win
      if (!canStillWin(newBoard)) {
        setTimeout(() => setGameState("lost"), 1500);
      }
    }

    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedSquare(null);
    }, 1500);
  };

  // Check if player can still form a line
  const canStillWin = (squares: BingoSquare[]): boolean => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    return lines.some(line => 
      line.every(index => squares[index]?.state !== "blocked")
    );
  };

  // Generate answer options
  const generateOptions = (correctAnswer: number): number[] => {
    const options = [correctAnswer];
    const used = new Set([correctAnswer]);
    
    while (options.length < 3) {
      const wrong = correctAnswer + (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 2) + 1);
      if (wrong > 0 && wrong <= 10 && !used.has(wrong)) {
        options.push(wrong);
        used.add(wrong);
      }
    }
    
    return options.sort(() => Math.random() - 0.5);
  };

  // Render game states
  if (gameState === "intro") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-pink-50 p-8">
        <div className="max-w-2xl text-center">
          <PennyCharacter />
          <h1 className="mt-6 text-3xl font-bold text-gray-800">
            Mix Colors with Penny!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Help Penny mix paint colors by adding them together! Get three in a row to win!
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <PaintDropSvg className="text-red-400" />
            <span className="text-2xl">+</span>
            <PaintDropSvg className="text-blue-400" />
            <span className="text-2xl">=</span>
            <PaintDropSvg className="text-purple-400" />
          </div>
          <button
            onClick={() => setGameState("playing")}
            className="mt-8 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-xl font-bold text-white shadow-lg transition hover:scale-105"
          >
            Let&apos;s Paint! 🎨
          </button>
        </div>
      </div>
    );
  }

  if (gameState === "won") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-green-50 to-blue-50 p-8">
        <div className="text-center">
          <div className="text-6xl">🌈</div>
          <h1 className="mt-6 text-4xl font-bold text-green-600">
            Bingo! You Did It!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            You mixed the colors perfectly!
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
            Keep Mixing!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Let&apos;s try mixing colors again!
          </p>
          <button
            onClick={() => {
              setBoard([]);
              setSelectedSquare(null);
              setGameState("intro");
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
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-purple-50 to-pink-50">
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
          Paint Bingo! 🎨
        </div>
      </header>

      {/* Game Area */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="flex flex-col items-center gap-6">
          {/* Penny Helper */}
          <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-lg">
            <PennyCharacter />
            <div className="max-w-xs">
              <p className="text-sm font-medium text-gray-800">
                {selectedSquare !== null
                  ? "Add the paint drops together!"
                  : "Click a square to mix colors!"}
              </p>
            </div>
          </div>

          {/* Bingo Board */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-3 rounded-2xl bg-white p-6 shadow-xl">
              {board.map((square, index) => (
                <button
                  key={index}
                  onClick={() => handleSquareClick(index)}
                  disabled={square.state !== "empty" || selectedSquare !== null}
                  className={`
                    relative h-24 w-24 rounded-xl transition-all
                    ${square.state === "empty" 
                      ? "bg-gradient-to-br from-gray-100 to-gray-200 hover:from-purple-100 hover:to-pink-100 cursor-pointer" 
                      : square.state === "correct"
                      ? "bg-gradient-to-br from-green-400 to-blue-400" 
                      : "bg-gray-300"}
                    ${selectedSquare === index ? "ring-4 ring-purple-400 scale-110" : ""}
                    ${square.state === "empty" && selectedSquare === null ? "hover:scale-105" : ""}
                  `}
                >
                  {square.state === "correct" && (
                    <PaintSplashSvg 
                      className="absolute inset-0 m-auto"
                      style={{ color: square.problem?.color1 }}
                    />
                  )}
                  {square.state === "blocked" && (
                    <span className="text-3xl">🚫</span>
                  )}
                  {square.state === "empty" && (
                    <span className="text-4xl opacity-20">?</span>
                  )}
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

          {/* Addition Problem */}
          {selectedSquare !== null && board[selectedSquare]?.problem && !showFeedback && (() => {
            const currentSquare = board[selectedSquare];
            const problem = currentSquare?.problem;
            if (!problem) return null;
            
            return (
            <div className="rounded-2xl bg-white p-6 shadow-xl">
              <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
                Mix these colors!
              </h3>
              <div className="mb-6 flex items-center justify-center gap-3">
                <div className="flex gap-1">
                  {Array.from({ length: board[selectedSquare]?.problem?.num1 ?? 0 }).map((_, i) => (
                    <PaintDropSvg 
                      key={`drop1-${i}`} 
                      style={{ color: board[selectedSquare]?.problem?.color1 ?? "#FF6B6B" }}
                      className="animate-bounce"
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold">+</span>
                <div className="flex gap-1">
                  {Array.from({ length: board[selectedSquare]?.problem?.num2 ?? 0 }).map((_, i) => (
                    <PaintDropSvg 
                      key={`drop2-${i}`} 
                      style={{ color: board[selectedSquare]?.problem?.color2 ?? "#4ECDC4" }}
                      className="animate-bounce"
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold">=</span>
                <span className="text-3xl font-bold">?</span>
              </div>
              <div className="flex gap-4 justify-center">
                {generateOptions(board[selectedSquare]?.problem?.answer ?? 0).map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-xl font-bold text-white shadow-lg transition hover:scale-105"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            );
          })()}

          {/* Help Button */}
          <button
            className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-gray-800 shadow-lg transition hover:bg-yellow-500"
          >
            I Don&apos;t Understand 🤔
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