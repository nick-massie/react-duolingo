export type Unit = {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  tiles: Tile[];
  story: string;
  mascot: string;
};

export type Tile =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
      description: string;
      gameType?: "tic-tac-toe" | "bingo" | "chutes-ladders";
      difficulty?: "level-1" | "level-2" | "level-3";
      learningDomain?: "math" | "reading" | "social";
    }
  | { type: "treasure" };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    description: "Math Adventures with Penny the Painter.",
    backgroundColor: "bg-[#ff6b6b]",
    textColor: "text-[#ff6b6b]",
    borderColor: "border-[#e55555]",
    story: "Oh no! Penny dropped her paint palette and all her colors scattered everywhere! Help her find the missing colors by solving math puzzles so she can finish her beautiful painting.",
    mascot: "Penny the Painter",
    tiles: [
      {
        type: "star",
        description: "Find Penny's scattered colors",
        gameType: "tic-tac-toe",
        difficulty: "level-1",
        learningDomain: "math",
      },
      {
        type: "book",
        description: "Mix colors for new shades",
        gameType: "bingo",
        difficulty: "level-1",
        learningDomain: "math",
      },
      {
        type: "star",
        description: "Paint shapes and patterns",
        gameType: "tic-tac-toe",
        difficulty: "level-2",
        learningDomain: "math",
      },
      { type: "treasure" },
      {
        type: "book",
        description: "Count art supplies to restock",
        gameType: "bingo",
        difficulty: "level-2",
        learningDomain: "math",
      },
      {
        type: "trophy",
        description: "Create Penny's masterpiece",
        gameType: "chutes-ladders",
        difficulty: "level-3",
        learningDomain: "math",
      },
    ],
  },
  {
    unitNumber: 2,
    description: "Reading Quest with Ranger Ruby",
    backgroundColor: "bg-[#4ecdc4]",
    textColor: "text-[#4ecdc4]",
    borderColor: "border-[#45b7af]",
    story: "Ranger Ruby lost her animal friends! Help find them by reading clues and solving word puzzles.",
    mascot: "Ranger Ruby",
    tiles: [
      {
        type: "star",
        description: "Match letters to sounds",
        gameType: "tic-tac-toe",
        difficulty: "level-1",
        learningDomain: "reading",
      },
      {
        type: "book",
        description: "Read sight words",
        gameType: "bingo",
        difficulty: "level-1",
        learningDomain: "reading",
      },
      {
        type: "star",
        description: "Rhyming words game",
        gameType: "tic-tac-toe",
        difficulty: "level-2",
        learningDomain: "reading",
      },
      { type: "treasure" },
      {
        type: "book",
        description: "Read short sentences",
        gameType: "bingo",
        difficulty: "level-2",
        learningDomain: "reading",
      },
      {
        type: "trophy",
        description: "Reading Champion Review",
        gameType: "chutes-ladders",
        difficulty: "level-3",
        learningDomain: "reading",
      },
    ],
  },
  {
    unitNumber: 3,
    description: "Social Skills with Nova the Explorer",
    backgroundColor: "bg-[#a8e6cf]",
    textColor: "text-[#a8e6cf]",
    borderColor: "border-[#96d4b8]",
    story: "Nova needs help fixing her spaceship! Learn teamwork and friendship skills to collect cosmic parts.",
    mascot: "Nova the Explorer",
    tiles: [
      {
        type: "star",
        description: "Take turns with friends",
        gameType: "tic-tac-toe",
        difficulty: "level-1",
        learningDomain: "social",
      },
      {
        type: "book",
        description: "Share and cooperate",
        gameType: "bingo",
        difficulty: "level-1",
        learningDomain: "social",
      },
      {
        type: "star",
        description: "Express feelings",
        gameType: "tic-tac-toe",
        difficulty: "level-2",
        learningDomain: "social",
      },
      { type: "treasure" },
      {
        type: "book",
        description: "Solve problems together",
        gameType: "bingo",
        difficulty: "level-2",
        learningDomain: "social",
      },
      {
        type: "trophy",
        description: "Social Skills Review",
        gameType: "chutes-ladders",
        difficulty: "level-3",
        learningDomain: "social",
      },
    ],
  },
];
