import type { NextPage } from "next";
import { BottomBar } from "~/components/BottomBar";
import { LeftBar } from "~/components/LeftBar";
import { TopBar } from "~/components/TopBar";
import { useBoundStore } from "~/hooks/useBoundStore";
import { useState } from "react";

const Arcade: NextPage = () => {
  return (
    <div>
      <TopBar />
      <LeftBar selectedTab="Arcade" />
      <div className="flex justify-center gap-3 pt-14 md:ml-24 lg:ml-64 lg:gap-12">
        <div className="flex w-full max-w-4xl flex-col gap-6 p-5">
          <ArcadeHeader />
          <ArcadeGames />
          <CoinInfo />
        </div>
      </div>
      <div className="pt-[90px]"></div>
      <BottomBar selectedTab="Arcade" />
    </div>
  );
};

export default Arcade;

const ArcadeHeader = () => {
  const coins = useBoundStore((x) => x.coins);

  return (
    <section className="text-center">
      <div className="mb-4 text-6xl">🕹️</div>
      <h1 className="mb-2 text-3xl font-bold text-gray-800">Fun Break Time!</h1>
      <p className="mb-6 text-lg text-gray-600">
        Take a break and have some fun! Play games to relax and enjoy yourself!
      </p>
      
      <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 px-6 py-4">
        <div className="text-4xl">🪙</div>
        <div>
          <div className="text-2xl font-bold text-purple-600">{coins}</div>
          <div className="text-sm text-gray-600">Arcade Coins</div>
        </div>
      </div>
    </section>
  );
};

const ArcadeGames = () => {
  const spendCoins = useBoundStore((x) => x.spendCoins);
  const canAfford = useBoundStore((x) => x.canAfford);
  const [playingGame, setPlayingGame] = useState<string | null>(null);

  const arcadeGames = [
    {
      id: "bubble_pop",
      title: "Bubble Pop",
      description: "Pop colorful bubbles and watch them burst!",
      icon: "🫧",
      cost: 8,
      gameType: "Quick Fun",
      color: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
    },
    {
      id: "memory_match",
      title: "Memory Match",
      description: "Match pairs of cute animal cards!",
      icon: "🐸",
      cost: 6,
      gameType: "Brain Teaser",
      color: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
    },
    {
      id: "treasure_hunt",
      title: "Treasure Hunt",
      description: "Find hidden treasures in a magical world!",
      icon: "💎",
      cost: 10,
      gameType: "Adventure",
      color: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200",
    },
    {
      id: "space_adventure",
      title: "Space Adventure",
      description: "Fly through space and collect stars!",
      icon: "🚀",
      cost: 12,
      gameType: "Action",
      color: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
    },
    {
      id: "music_maker",
      title: "Music Maker",
      description: "Create your own songs with fun sounds!",
      icon: "🎵",
      cost: 7,
      gameType: "Creative",
      color: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
    },
    {
      id: "puzzle_master",
      title: "Puzzle Master",
      description: "Relax with beautiful jigsaw puzzles!",
      icon: "🧩",
      cost: 9,
      gameType: "Relaxing",
      color: "from-indigo-50 to-blue-50",
      borderColor: "border-indigo-200",
    },
  ];

  const handlePlayGame = (game: typeof arcadeGames[0]) => {
    if (canAfford(game.cost)) {
      const success = spendCoins(game.cost, game.title);
      if (success) {
        setPlayingGame(game.id);
        // Simulate game play for 3 seconds
        setTimeout(() => {
          setPlayingGame(null);
        }, 3000);
      }
    }
  };

  if (playingGame) {
    const game = arcadeGames.find(g => g.id === playingGame);
    return (
      <section className="text-center">
        <div className="rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 p-8">
          <div className="text-8xl mb-4 animate-bounce">{game?.icon}</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Playing {game?.title}!</h2>
          <p className="text-gray-600 mb-4">Having so much fun! 🎉</p>
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
          <p className="text-sm text-gray-500 mt-2">Game will finish soon...</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-gray-800 text-center">Choose Your Game</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {arcadeGames.map((game) => {
          const affordable = canAfford(game.cost);
          
          return (
            <div
              key={game.id}
              className={`rounded-2xl bg-gradient-to-b ${game.color} border ${game.borderColor} p-6 text-center transition-all hover:shadow-lg ${
                affordable ? "" : "opacity-75"
              }`}
            >
              <div className={`text-6xl mb-4 ${affordable ? "" : "grayscale"}`}>
                {game.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{game.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{game.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  game.gameType === "Quick Fun" 
                    ? "bg-blue-100 text-blue-700"
                    : game.gameType === "Brain Teaser"
                    ? "bg-green-100 text-green-700"
                    : game.gameType === "Adventure"
                    ? "bg-yellow-100 text-yellow-700"
                    : game.gameType === "Action"
                    ? "bg-purple-100 text-purple-700"
                    : game.gameType === "Creative"
                    ? "bg-pink-100 text-pink-700"
                    : "bg-indigo-100 text-indigo-700"
                }`}>
                  {game.gameType}
                </span>
                <span className="text-sm font-bold text-purple-600">
                  🪙 {game.cost} coins
                </span>
              </div>

              <button
                onClick={() => handlePlayGame(game)}
                disabled={!affordable}
                className={`w-full py-3 rounded-xl font-bold text-white transition ${
                  affordable
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {affordable ? "Play Game!" : "Need More Coins"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const CoinInfo = () => {
  const coins = useBoundStore((x) => x.coins);
  
  return (
    <section>
      <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-6">
        <h3 className="mb-4 text-lg font-bold text-gray-800 text-center flex items-center justify-center gap-2">
          <span className="text-2xl">💡</span>
          Your Fun Break Zone
        </h3>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-white p-4">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span className="text-xl">🎮</span>
              Different Types of Fun
            </h4>
            <p className="text-sm text-gray-600">
              Choose from relaxing puzzles, creative music games, quick bubble fun, or exciting adventures!
            </p>
          </div>
          
          <div className="rounded-xl bg-white p-4">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span className="text-xl">🪙</span>
              Spending Your Coins
            </h4>
            <p className="text-sm text-gray-600">
              Each game costs a few coins to play. Pick your favorite type of fun and enjoy!
            </p>
          </div>
        </div>

        {coins < 10 && (
          <div className="mt-4 p-4 bg-yellow-100 border border-yellow-300 rounded-xl text-center">
            <p className="text-sm text-yellow-800">
              <strong>🪙 Want more game time?</strong> Head to the Store to see how to earn more coins!
            </p>
          </div>
        )}
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            🌟 <strong>Take your time!</strong> This is your space to relax and have fun!
          </p>
        </div>
      </div>
    </section>
  );
};