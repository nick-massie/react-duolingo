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

// Particle effect component for celebrations
const ParticleEffect = ({ show }: { show: boolean }) => {
  if (!show) return null;
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-ping"
          style={{
            left: `${20 + (i % 4) * 20}%`,
            top: `${20 + Math.floor(i / 4) * 20}%`,
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1s'
          }}
        >
          <span className="text-2xl">✨</span>
        </div>
      ))}
    </div>
  );
};

// Penny the Painter character
const PennyCharacter = ({ animated: _animated = false, correctAnswers = 0 }: { animated?: boolean; correctAnswers?: number }) => {
  // Choose image based on progress
  const getPennyImage = () => {
    if (correctAnswers >= 2) {
      return "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"; // Happy child painting
    }
    return "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"; // Default painting image
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <img
          src={getPennyImage()}
          alt="Penny the Painter"
          className="h-20 w-20 object-cover shadow-lg rounded-xl"
        />
        <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-yellow-400 p-1 shadow-lg">
          <span className="text-sm">✨</span>
        </div>
      </div>
    </div>
  );
};

// Story Panel Component for Level 1
const PennyStoryPanel = ({ gameState, correctAnswers }: { gameState: GameState; correctAnswers: number }) => {
  // Choose image based on progress  
  const getPennyImage = () => {
    if (correctAnswers >= 2) {
      return "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"; // Happy child painting
    }
    return "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"; // Default painting image
  };

  const getStoryContent = () => {
    if (gameState === "intro") {
      return {
        title: "Help Penny Find Colors!",
        message: "Oh no! I dropped my paint palette and all my colors scattered everywhere! Can you help me count them back into groups?",
        emotion: "😰"
      };
    }
    
    if (gameState === "playing") {
      if (correctAnswers === 0) {
        return {
          title: "Let's Start Counting!",
          message: "Click on a square and help me add up the paint drops! I need to organize my colors to start painting again.",
          emotion: "🤔"
        };
      } else if (correctAnswers < 3) {
        return {
          title: "Great Work!",
          message: "You're helping me find my colors! Keep counting - I can see my painting coming together!",
          emotion: "😊"
        };
      } else {
        return {
          title: "Almost There!",
          message: "Wow! You're so good at finding colors! Just a few more and I'll have enough colors to finish my masterpiece!",
          emotion: "🤩"
        };
      }
    }
    
    if (gameState === "won") {
      return {
        title: "Amazing!",
        message: "You helped me find all my colors! Now I can paint the most beautiful rainbow! Thank you for being such a great helper!",
        emotion: "🌈"
      };
    }
    
    return {
      title: "Let's Try Again!",
      message: "That's okay! Counting can be tricky. Let's practice more together - I know you can do it!",
      emotion: "💪"
    };
  };

  const story = getStoryContent();

  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-yellow-50 to-orange-50 p-6">
      {/* Penny Character - Larger for story mode */}
      <div className="flex flex-col items-center">
        <div className="relative mb-4">
          <img
            src={getPennyImage()}
            alt="Penny the Painter"
            className="h-60 w-60 object-contain shadow-lg rounded-xl"
          />
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Penny the Painter
        </h2>
      </div>

      {/* Story Content */}
      <div className="mt-6 flex-1">
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold text-purple-600">
            {story.title}
          </h3>
          <p className="text-lg leading-relaxed text-gray-700">
            {story.message}
          </p>
        </div>

        {/* Progress Indicator */}
        {gameState === "playing" && (
          <div className="mt-6 rounded-xl bg-white p-4 shadow-md">
            <h4 className="mb-2 text-sm font-semibold text-gray-600">
              Colors Found: {correctAnswers}/4
            </h4>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-4 w-full rounded ${
                    i <= correctAnswers
                      ? "bg-gradient-to-r from-green-400 to-blue-400"
                      : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Level 1 Learning Goal */}
        <div className="mt-6 rounded-xl bg-purple-100 p-4">
          <h4 className="mb-2 text-sm font-bold text-purple-700">
            🎯 Learning Goal
          </h4>
          <p className="text-sm text-purple-600">
            Practice addition and subtraction with numbers up to 10 by helping Penny mix her paint colors!
          </p>
        </div>
      </div>
    </div>
  );
};

type GameState = "intro" | "playing" | "won" | "lost";
type SquareState = "empty" | "correct" | "blocked";

// Generate math problems - moved outside component to avoid useEffect dependency warning
const generateProblems = () => {
  const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#F7DC6F", "#BB8FCE", "#85C1E9"];
  const problemTemplates = [
    // Addition problems
    { num1: 3, num2: 4, operation: "+" },
    { num1: 5, num2: 2, operation: "+" },
    { num1: 6, num2: 3, operation: "+" },
    { num1: 4, num2: 5, operation: "+" },
    { num1: 7, num2: 2, operation: "+" },
    { num1: 2, num2: 6, operation: "+" },
    { num1: 8, num2: 1, operation: "+" },
    { num1: 3, num2: 5, operation: "+" },
    { num1: 4, num2: 4, operation: "+" },
    // Subtraction problems
    { num1: 8, num2: 3, operation: "-" },
    { num1: 10, num2: 4, operation: "-" },
    { num1: 9, num2: 2, operation: "-" },
    { num1: 7, num2: 5, operation: "-" },
    { num1: 6, num2: 1, operation: "-" },
    { num1: 9, num2: 3, operation: "-" },
    { num1: 8, num2: 2, operation: "-" },
  ];

  return problemTemplates.map(template => ({
    ...template,
    answer: template.operation === "+" ? template.num1 + template.num2 : template.num1 - template.num2,
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
    operation: string;
    answer: number;
    color1: string;
    color2: string;
  };
}

interface BingoGameProps {
  onComplete: (won: boolean) => void;
  onExit: () => void;
  storyMode?: boolean;
  level?: number;
}

export const BingoGame: React.FC<BingoGameProps> = ({
  onComplete,
  onExit,
  storyMode = false,
  level = 1,
}) => {
  const [gameState, setGameState] = useState<GameState>("intro");
  const [board, setBoard] = useState<BingoSquare[]>([]);
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [, setWinningLines] = useState<number[]>([]);
  const [showParticles, setShowParticles] = useState(false);

  // Initialize board with problems
  useEffect(() => {
    const problems = generateProblems();
    const newBoard: BingoSquare[] = Array(16).fill(null).map((_, index) => ({
      id: index,
      state: "empty",
      problem: problems[index],
    }));
    setBoard(newBoard);
  }, []);

  // Play victory fanfare when game is won
  useEffect(() => {
    if (gameState === "won") {
      try {
        const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        const audioContext = AudioContextClass ? new AudioContextClass() : null;
        
        if (!audioContext) return;
        
        // Create a triumphant "dun-dun-dun-DUN!" fanfare
        const playFanfareTone = (frequency: number, startTime: number, duration: number, volume: number) => {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.frequency.setValueAtTime(frequency, startTime);
          oscillator.type = 'triangle';
          
          gainNode.gain.setValueAtTime(0, startTime);
          gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.02);
          gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
          
          oscillator.start(startTime);
          oscillator.stop(startTime + duration);
        };
        
        // Victory fanfare: "dun-dun-dun-DUN!" with triumphant chord
        const now = audioContext.currentTime;
        
        // First "dun"
        playFanfareTone(392, now + 0.1, 0.3, 0.3);   // G4
        playFanfareTone(523, now + 0.1, 0.3, 0.2);   // C5
        
        // Second "dun" 
        playFanfareTone(440, now + 0.5, 0.3, 0.3);   // A4
        playFanfareTone(554, now + 0.5, 0.3, 0.2);   // C#5
        
        // Third "dun"
        playFanfareTone(494, now + 0.9, 0.3, 0.3);   // B4
        playFanfareTone(659, now + 0.9, 0.3, 0.2);   // E5
        
        // Final triumphant "DUN!" - full chord
        playFanfareTone(523, now + 1.3, 0.8, 0.4);   // C5 - strong bass
        playFanfareTone(659, now + 1.3, 0.8, 0.3);   // E5
        playFanfareTone(784, now + 1.3, 0.8, 0.3);   // G5  
        playFanfareTone(1047, now + 1.3, 0.8, 0.25); // C6 - sparkling top
        
      } catch (error) {
        console.log("Audio not supported");
      }
    }
  }, [gameState]);

  // Check for winning lines (4x4 grid - need 4 in a row)
  const checkWin = (squares: BingoSquare[]): number[] => {
    const lines = [
      // Rows (4 in a row)
      [0, 1, 2, 3],    // Top row
      [4, 5, 6, 7],    // Second row  
      [8, 9, 10, 11],  // Third row
      [12, 13, 14, 15], // Bottom row
      // Columns (4 in a column)
      [0, 4, 8, 12],   // Left column
      [1, 5, 9, 13],   // Second column
      [2, 6, 10, 14],  // Third column
      [3, 7, 11, 15],  // Right column
      // Diagonals (4 in diagonal)
      [0, 5, 10, 15],  // Diagonal \
      [3, 6, 9, 12],   // Diagonal /
    ];

    const winningLines: number[] = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;
      const [a, b, c, d] = line;
      if (a !== undefined && b !== undefined && c !== undefined && d !== undefined &&
          squares[a]?.state === "correct" && 
          squares[b]?.state === "correct" && 
          squares[c]?.state === "correct" &&
          squares[d]?.state === "correct") {
        winningLines.push(i);
      }
    }

    return winningLines;
  };

  // Get potential winning lines (lines with progress but not blocked)
  const getPotentialWinningLines = (squares: BingoSquare[]): { lineIndex: number; progress: number; total: number }[] => {
    const lines = [
      // Rows
      [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
      // Columns  
      [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
      // Diagonals
      [0, 5, 10, 15], [3, 6, 9, 12],
    ];

    return lines.map((line, lineIndex) => {
      const correctCount = line.filter(index => squares[index]?.state === "correct").length;
      const blockedCount = line.filter(index => squares[index]?.state === "blocked").length;
      
      return {
        lineIndex,
        progress: correctCount,
        total: 4,
        isViable: blockedCount === 0 // Line can still be completed
      };
    }).filter(line => line.isViable && line.progress > 0);
  };

  // Get hint for easiest available problem
  const getHint = (): number | null => {
    const emptySquares = board
      .map((square, index) => ({ square, index }))
      .filter(({ square }) => square.state === "empty");
    
    if (emptySquares.length === 0) return null;
    
    // Find the easiest problem (smallest sum/difference)
    const easiestSquare = emptySquares.reduce((easiest, current) => {
      const currentAnswer = current.square.problem?.answer ?? 0;
      const easiestAnswer = easiest.square.problem?.answer ?? 0;
      return currentAnswer < easiestAnswer ? current : easiest;
    });
    
    return easiestSquare.index;
  };

  // Handle square selection (with undo functionality)
  const handleSquareClick = (index: number) => {
    if (gameState !== "playing") return;
    
    // If clicking on a non-empty square, do nothing
    if (board[index]?.state !== "empty") return;
    
    // If clicking on currently selected square, deselect it (undo)
    if (selectedSquare === index) {
      setSelectedSquare(null);
      return;
    }
    
    // Otherwise, select the square
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
      // Play joyful success sound effect
      try {
        const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        const audioContext = AudioContextClass ? new AudioContextClass() : null;
        
        if (!audioContext) return;
        
        // Create a cheerful "ta-da!" sound with multiple tones
        const playTone = (frequency: number, startTime: number, duration: number, volume: number) => {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.frequency.setValueAtTime(frequency, startTime);
          oscillator.type = 'triangle'; // Warmer sound than sine wave
          
          gainNode.gain.setValueAtTime(0, startTime);
          gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
          
          oscillator.start(startTime);
          oscillator.stop(startTime + duration);
        };
        
        // Create a happy chord progression - like a mini celebration
        const now = audioContext.currentTime;
        playTone(523, now, 0.15, 0.2);        // C5 - first note
        playTone(659, now + 0.05, 0.15, 0.2); // E5 - harmony
        playTone(784, now + 0.1, 0.25, 0.25); // G5 - final celebratory note
        playTone(1047, now + 0.15, 0.2, 0.15); // C6 - sparkle on top
        
      } catch (error) {
        // Fallback: ignore if audio context isn't supported
        console.log("Audio not supported");
      }

      // Dynamic feedback based on problem difficulty and progress
      const problemAnswer = board[selectedSquare]?.problem?.answer ?? 0;
      const feedbackMessages = [
        problemAnswer <= 5 ? "Nice work! 🎨" : "Excellent math! 🌟",
        correctAnswersCount === 0 ? "First one down! 🎯" : "You're on fire! 🔥",
        correctAnswersCount >= 2 ? "Almost there! ⭐" : "Keep it up! 💪"
      ];
      
      setFeedbackMessage(feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)] || "Great job! 🎉");
      setCorrectAnswersCount(prev => prev + 1);
      setShowParticles(true);
      
      // Hide particles after animation
      setTimeout(() => setShowParticles(false), 1500);
      
      const winLines = checkWin(newBoard);
      
      if (winLines.length > 0) {
        setWinningLines(winLines);
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

  // Check if player can still form a line (4x4 grid)
  const canStillWin = (squares: BingoSquare[]): boolean => {
    const lines = [
      // Rows (4 in a row)
      [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
      // Columns (4 in a column)
      [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
      // Diagonals (4 in diagonal)
      [0, 5, 10, 15], [3, 6, 9, 12],
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
      const wrong = correctAnswer + (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 3) + 1);
      if (wrong > 0 && wrong <= 15 && !used.has(wrong)) {
        options.push(wrong);
        used.add(wrong);
      }
    }
    
    return options.sort(() => Math.random() - 0.5);
  };

  // Render game states
  if (gameState === "intro") {
    if (storyMode) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-pink-50 p-8">
          <div className="max-w-md text-center">
              {/* Animated Penny Video */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  {/* Fallback image instead of video for deployment */}
                  <div className="h-72 w-72 bg-gradient-to-br from-pink-400 to-purple-400 p-8 flex items-center justify-center shadow-lg rounded-xl">
                    <span className="text-8xl">🎨</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800">
                Help Penny Find Colors!
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Oh no! Penny dropped her paint palette and all her colors scattered everywhere! Help her find the missing colors by solving math puzzles so she can finish her beautiful painting.
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
                Let&apos;s Play! 🎨
              </button>
            </div>
        </div>
      );
    }
    
    // Original full-screen intro for non-story mode
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-pink-50 p-8">
        <div className="max-w-2xl text-center">
          <PennyCharacter animated={true} correctAnswers={correctAnswersCount} />
          <h1 className="mt-6 text-3xl font-bold text-gray-800">
            Help Penny Find Colors!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Penny dropped her paint palette and all her colors scattered! Help her find them by solving math puzzles and collecting the missing colors!
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
    if (storyMode) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-green-50 to-blue-50 p-8">
          <div className="text-center">
              {/* Happy Penny Final Image */}
              <div className="mb-6 flex justify-center">
                <div className="h-48 w-48 bg-gradient-to-br from-green-400 to-blue-400 p-8 flex items-center justify-center shadow-lg rounded-xl">
                  <span className="text-6xl">🎉</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-green-600">
                Amazing Work!
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                You helped Penny find all her colors!
              </p>
              <div className="mt-6 flex justify-center gap-2">
                <span className="text-4xl">🎨</span>
                <span className="text-4xl">✨</span>
                <span className="text-4xl">🎆</span>
              </div>
              <button
                onClick={() => onComplete(true)}
                className="mt-8 rounded-xl bg-green-500 px-8 py-4 text-xl font-bold text-white shadow-lg transition hover:bg-green-600"
              >
                Next Adventure! 🌟
              </button>
            </div>
        </div>
      );
    }
    
    // Original full-screen won state
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-green-50 to-blue-50 p-8">
        <div className="text-center">
          {/* Happy Penny Final Image */}
          <div className="mb-6 flex justify-center">
            <div className="h-48 w-48 bg-gradient-to-br from-green-400 to-blue-400 p-8 flex items-center justify-center shadow-lg rounded-xl">
              <span className="text-6xl">🎉</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-green-600">
            Bingo! You Did It!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            You found all the colors perfectly!
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
    if (storyMode) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-yellow-50 p-8">
          <div className="text-center">
              <div className="text-6xl">🎨</div>
              <h1 className="mt-6 text-4xl font-bold text-orange-600">
                Let&apos;s Practice More!
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Learning to count takes practice. Let&apos;s try again!
              </p>
              <button
                onClick={() => {
                  setBoard([]);
                  setSelectedSquare(null);
                  setCorrectAnswersCount(0);
                  setGameState("intro");
                }}
                className="mt-8 rounded-xl bg-orange-500 px-8 py-4 text-xl font-bold text-white shadow-lg transition hover:bg-orange-600"
              >
                Try Again 💪
              </button>
            </div>
        </div>
      );
    }
    
    // Original full-screen lost state
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
              setCorrectAnswersCount(0);
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

  // Main game playing state with split-screen support
  if (storyMode) {
    return (
      <div className="flex min-h-screen">
        {/* Left Pane - Game Area */}
        <div className="flex flex-1 flex-col bg-gradient-to-b from-purple-50 to-pink-50">
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
              Level {level}: Math with Paint! 🎨
            </div>
            <div className="w-10" /> {/* Spacer for center alignment */}
          </header>

          {/* Game Area - TRULY CENTERED WITH NO GAPS */}
          <div className="flex flex-1 items-center justify-center">
            {/* SINGLE UNIFIED COMPONENT - NO GAPS POSSIBLE */}
            <div className="bg-white rounded-2xl shadow-xl" style={{width: '900px', height: '600px'}}>
              <div className="flex h-full">
                {/* Game Board - Exactly Half */}
                <div className="relative flex-1">
                  <div className="grid grid-cols-4 gap-2 p-4 h-full">
                  {board.map((square, index) => (
                    <button
                      key={index}
                      onClick={() => handleSquareClick(index)}
                      disabled={square.state !== "empty" && selectedSquare !== index}
                      className={`
                        relative aspect-square rounded-xl transition-all duration-300 transform
                        ${square.state === "empty" 
                          ? "bg-gradient-to-br from-gray-100 to-gray-200 hover:from-purple-100 hover:to-pink-100 cursor-pointer hover:shadow-lg hover:shadow-purple-200" 
                          : square.state === "correct"
                          ? "bg-gradient-to-br from-green-400 to-blue-400 shadow-md animate-pulse" 
                          : "bg-gradient-to-br from-red-200 to-red-300"}
                        ${selectedSquare === index ? "ring-4 ring-purple-400 scale-110 shadow-xl shadow-purple-300" : ""}
                        ${square.state === "empty" && selectedSquare === null ? "hover:scale-105 hover:rotate-1" : ""}
                      `}
                    >
                      {square.state === "correct" && (
                        <PaintSplashSvg 
                          className="absolute inset-0 m-auto"
                          style={{ color: square.problem?.color1 }}
                        />
                      )}
                      {square.state === "blocked" && (
                        <span className="text-2xl">🚫</span>
                      )}
                      {square.state === "empty" && (
                        <span className="text-3xl opacity-20">?</span>
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
                
                  {/* Particle Effects */}
                  <ParticleEffect show={showParticles} />
                </div>

                {/* Math Panel - Exactly Half - TOUCHING */}
                <div className="flex-1 border-l border-gray-200">
                  {selectedSquare !== null && board[selectedSquare]?.problem && !showFeedback ? (() => {
                    const currentSquare = board[selectedSquare];
                    const problem = currentSquare?.problem;
                    if (!problem) return null;
                    
                    return (
                      <div className="bg-gradient-to-br from-white to-purple-50 p-4 h-full flex flex-col justify-center">
                        <h3 className="mb-6 text-center text-2xl font-bold text-gray-800">
                          {board[selectedSquare]?.problem?.operation === "+" ? "🎨 Add Colors!" : "🎨 Mix Colors!"}
                        </h3>
                        
                        <div className="mb-6 flex items-center justify-center gap-4">
                          <div className="text-center p-4 rounded-xl bg-white shadow-md">
                            <div className="text-4xl font-bold mb-2" style={{ color: board[selectedSquare]?.problem?.color1 ?? "#FF6B6B" }}>
                              {board[selectedSquare]?.problem?.num1}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">drops</div>
                          </div>
                          
                          <div className="text-4xl font-bold text-purple-600">
                            {board[selectedSquare]?.problem?.operation}
                          </div>
                          
                          <div className="text-center p-4 rounded-xl bg-white shadow-md">
                            <div className="text-4xl font-bold mb-2" style={{ color: board[selectedSquare]?.problem?.color2 ?? "#4ECDC4" }}>
                              {board[selectedSquare]?.problem?.num2}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">drops</div>
                          </div>
                          
                          <div className="text-4xl font-bold text-purple-600">=</div>
                          <div className="text-5xl font-bold text-gray-400">?</div>
                        </div>
                        
                        <div className="space-y-3">
                          {generateOptions(board[selectedSquare]?.problem?.answer ?? 0).map((option) => (
                            <button
                              key={option}
                              onClick={() => handleAnswer(option)}
                              className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4 text-2xl font-bold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                        
                        <div className="mt-4 text-center">
                          <button
                            onClick={() => setSelectedSquare(null)}
                            className="text-sm text-gray-500 hover:text-gray-700 underline"
                          >
                            ← Choose different square
                          </button>
                        </div>
                      </div>
                    );
                  })() : (
                    <div className="bg-gradient-to-br from-white to-blue-50 p-4 text-center h-full flex flex-col justify-center">
                      <div className="mb-4 text-4xl">⭐</div>
                      <h3 className="mb-3 text-lg font-bold text-gray-800">
                        Choose Your Challenge!
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Click on any empty square to reveal a math puzzle. Get 4 in a row to win!
                      </p>
                      
                      <div className="flex justify-center">
                        <button
                          onClick={() => {
                            const hint = getHint();
                            if (hint !== null) {
                              setSelectedSquare(hint);
                            }
                          }}
                          className="rounded-xl bg-yellow-400 px-4 py-2 text-sm font-bold text-gray-800 shadow-lg transition hover:bg-yellow-500"
                        >
                          Show me an easy one! 💡
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Pane - Story Panel */}
        <div className="w-80">
          <PennyStoryPanel gameState={gameState} correctAnswers={correctAnswersCount} />
        </div>
      </div>
    );
  }

  // Original full-screen layout for non-story mode
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

      {/* SINGLE UNIFIED COMPONENT - NO GAPS POSSIBLE */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl" style={{width: '900px', height: '600px'}}>
          <div className="flex h-full">
            {/* Game Board - Exactly Half */}
            <div className="relative flex-1">
              {/* Penny Helper at top */}
              <div className="flex items-center gap-2 p-3 border-b border-gray-100">
                <div className="w-8 h-8">
                  <PennyCharacter correctAnswers={correctAnswersCount} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-700">
                    {selectedSquare !== null
                      ? "Solve the math puzzle!"
                      : "Click a square to reveal a challenge!"}
                  </p>
                </div>
              </div>

              <div className="p-3 h-full">
                <div className="grid grid-cols-4 gap-2 h-full max-h-[300px]">
                  {board.map((square, index) => (
                    <button
                      key={index}
                      onClick={() => handleSquareClick(index)}
                      disabled={square.state !== "empty" && selectedSquare !== index}
                      className={`
                        relative aspect-square rounded-lg transition-all duration-300 transform
                        ${square.state === "empty" 
                          ? "bg-gradient-to-br from-gray-100 to-gray-200 hover:from-purple-100 hover:to-pink-100 cursor-pointer hover:shadow-lg hover:shadow-purple-200" 
                          : square.state === "correct"
                          ? "bg-gradient-to-br from-green-400 to-blue-400 shadow-md animate-pulse" 
                          : "bg-gradient-to-br from-red-200 to-red-300"}
                        ${selectedSquare === index ? "ring-2 ring-purple-400 scale-105 shadow-lg shadow-purple-300" : ""}
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
                        <span className="text-2xl">🚫</span>
                      )}
                      {square.state === "empty" && (
                        <span className="text-3xl opacity-20">?</span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Feedback Message */}
                {showFeedback && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-2xl">
                    <div className="rounded-xl bg-white p-4 shadow-2xl">
                      <p className="text-xl font-bold text-gray-800">{feedbackMessage}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Math Panel - Exactly Half - TOUCHING */}
            <div className="flex-1 border-l border-gray-200">
              {selectedSquare !== null && board[selectedSquare]?.problem && !showFeedback ? (() => {
                const currentSquare = board[selectedSquare];
                const problem = currentSquare?.problem;
                if (!problem) return null;
                
                return (
                  <div className="h-full flex flex-col p-4 bg-gradient-to-br from-white to-purple-50">
                    <h3 className="text-center text-2xl font-bold text-gray-800 mb-6">
                      {board[selectedSquare]?.problem?.operation === "+" ? "🎨 Add Paint!" : "🎨 Mix Paint!"}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="text-center p-4 rounded-xl bg-white shadow-md">
                        <div className="text-4xl font-bold" style={{ color: board[selectedSquare]?.problem?.color1 ?? "#FF6B6B" }}>
                          {board[selectedSquare]?.problem?.num1}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">drops</div>
                      </div>
                      
                      <div className="text-4xl font-bold text-purple-600">
                        {board[selectedSquare]?.problem?.operation}
                      </div>
                      
                      <div className="text-center p-4 rounded-xl bg-white shadow-md">
                        <div className="text-4xl font-bold" style={{ color: board[selectedSquare]?.problem?.color2 ?? "#4ECDC4" }}>
                          {board[selectedSquare]?.problem?.num2}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">drops</div>
                      </div>
                      
                      <div className="text-4xl font-bold text-purple-600">=</div>
                      <div className="text-5xl font-bold text-gray-400">?</div>
                    </div>
                    
                    <div className="flex-1 flex flex-col gap-3">
                      {generateOptions(board[selectedSquare]?.problem?.answer ?? 0).map((option) => (
                        <button
                          key={option}
                          onClick={() => handleAnswer(option)}
                          className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4 text-2xl font-bold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    
                    <div className="text-center mt-2">
                      <button
                        onClick={() => setSelectedSquare(null)}
                        className="text-sm text-gray-500 hover:text-gray-700 underline"
                      >
                        ← Choose different square
                      </button>
                    </div>
                  </div>
                );
              })() : (
                <div className="h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-white to-blue-50 text-center">
                  <div className="mb-4">
                    <PennyCharacter animated={true} correctAnswers={correctAnswersCount} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-800">
                    Ready for Math Magic?
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Click any empty square to reveal a math puzzle. Get 4 in a row to win!
                  </p>
                  
                  {/* Progress Indicator */}
                  {(() => {
                    const potentialLines = getPotentialWinningLines(board);
                    if (potentialLines.length > 0) {
                      return (
                        <div className="mb-4 space-y-2 w-full">
                          <h4 className="text-sm font-semibold text-gray-700">🎯 Progress</h4>
                          {potentialLines.slice(0, 2).map((line, _index) => (
                            <div key={line.lineIndex} className="flex items-center justify-between bg-white rounded-lg p-2 shadow-sm text-xs">
                              <span className="font-medium text-gray-600">
                                {line.lineIndex < 4 ? `Row ${line.lineIndex + 1}` : 
                                 line.lineIndex < 8 ? `Col ${line.lineIndex - 3}` : 
                                 line.lineIndex === 8 ? 'Diag \\\\' : 'Diag /'}
                              </span>
                              <div className="flex gap-1">
                                {Array.from({ length: 4 }).map((_, i) => (
                                  <div 
                                    key={i} 
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                      i < line.progress ? 'bg-green-400' : 'bg-gray-200'
                                    }`} 
                                  />
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  })()}
                  
                  <button
                    onClick={() => {
                      const hint = getHint();
                      if (hint !== null) {
                        setSelectedSquare(hint);
                      }
                    }}
                    className="rounded-lg bg-yellow-400 px-4 py-2 text-sm font-bold text-gray-800 shadow-md transition hover:bg-yellow-500"
                  >
                    Give me a hint! 💡
                  </button>
                </div>
              )}
            </div>
          </div>
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