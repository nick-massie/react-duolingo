import type { NextPage } from "next";
import { BottomBar } from "~/components/BottomBar";
import { LeftBar } from "~/components/LeftBar";
import { TopBar } from "~/components/TopBar";
import { useBoundStore } from "~/hooks/useBoundStore";
import { useState } from "react";

const Store: NextPage = () => {
  return (
    <div>
      <TopBar />
      <LeftBar selectedTab="Store" />
      <div className="flex justify-center gap-3 pt-14 md:ml-24 lg:ml-64 lg:gap-12">
        <div className="flex w-full max-w-4xl flex-col gap-6 p-5">
          <StoreHeader />
          <CoinEarningGuide />
          <ArcadeInfo />
          <StoreItems />
          <CoinHistory />
        </div>
      </div>
      <div className="pt-[90px]"></div>
      <BottomBar selectedTab="Store" />
    </div>
  );
};

export default Store;

const StoreHeader = () => {
  const coins = useBoundStore((x) => x.coins);
  const totalCoinsEarned = useBoundStore((x) => x.totalCoinsEarned);

  return (
    <section className="text-center">
      <div className="mb-4 text-8xl">🪙</div>
      <h1 className="mb-2 text-4xl font-bold text-gray-800">Coin Store</h1>
      <p className="mb-8 text-xl text-gray-600">
        Spend your coins on awesome stuff!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-gradient-to-b from-yellow-100 to-yellow-200 p-8 text-center shadow-lg">
          <div className="text-7xl mb-4">💰</div>
          <div className="text-5xl font-bold text-yellow-700 mb-2">{coins}</div>
          <div className="text-xl text-yellow-600">Coins to Spend!</div>
        </div>
        
        <div className="rounded-3xl bg-gradient-to-b from-green-100 to-green-200 p-8 text-center shadow-lg">
          <div className="text-7xl mb-4">🏆</div>
          <div className="text-5xl font-bold text-green-700 mb-2">{totalCoinsEarned}</div>
          <div className="text-xl text-green-600">Total Coins Earned!</div>
        </div>
      </div>
    </section>
  );
};

const CoinEarningGuide = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
        <span className="text-4xl">⭐</span>
        How to Get More Coins
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-3xl bg-gradient-to-b from-blue-100 to-blue-200 p-6 text-center shadow-lg">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-xl font-bold text-blue-700 mb-2">Do Lessons</h3>
          <div className="text-3xl font-bold text-blue-600 mb-2">+15 🪙</div>
          <p className="text-blue-600">Every lesson gives you 15 coins!</p>
        </div>
        
        <div className="rounded-3xl bg-gradient-to-b from-orange-100 to-orange-200 p-6 text-center shadow-lg">
          <div className="text-6xl mb-4">🔥</div>
          <h3 className="text-xl font-bold text-orange-700 mb-2">Daily Streak</h3>
          <div className="text-3xl font-bold text-orange-600 mb-2">+25 🪙</div>
          <p className="text-orange-600">Learn every day for bonus coins!</p>
        </div>
        
        <div className="rounded-3xl bg-gradient-to-b from-purple-100 to-purple-200 p-6 text-center shadow-lg">
          <div className="text-6xl mb-4">🌟</div>
          <h3 className="text-xl font-bold text-purple-700 mb-2">Perfect Score</h3>
          <div className="text-3xl font-bold text-purple-600 mb-2">+10 🪙</div>
          <p className="text-purple-600">Get everything right for extra coins!</p>
        </div>
      </div>
    </section>
  );
};

const ArcadeInfo = () => {
  const coins = useBoundStore((x) => x.coins);

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
        <span className="text-4xl">🕹️</span>
        Play Games in the Arcade!
      </h2>
      
      <div className="rounded-3xl bg-gradient-to-r from-purple-100 to-pink-100 border-4 border-purple-300 p-8">
        <div className="text-center mb-6">
          <div className="text-7xl mb-4">🎮</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Use Your Coins to Play Fun Games!
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Go to the Arcade tab to play awesome games with your coins!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-6 text-center shadow-md">
            <div className="text-5xl mb-3">🫧</div>
            <h4 className="text-lg font-bold text-purple-700 mb-2">Bubble Pop</h4>
            <div className="text-2xl font-bold text-purple-600 mb-1">5 🪙</div>
            <p className="text-sm text-gray-600">Pop colorful bubbles!</p>
          </div>
          
          <div className="rounded-2xl bg-white p-6 text-center shadow-md">
            <div className="text-5xl mb-3">🐸</div>
            <h4 className="text-lg font-bold text-purple-700 mb-2">Memory Match</h4>
            <div className="text-2xl font-bold text-purple-600 mb-1">8 🪙</div>
            <p className="text-sm text-gray-600">Match cute animals!</p>
          </div>
          
          <div className="rounded-2xl bg-white p-6 text-center shadow-md">
            <div className="text-5xl mb-3">💎</div>
            <h4 className="text-lg font-bold text-purple-700 mb-2">Treasure Hunt</h4>
            <div className="text-2xl font-bold text-purple-600 mb-1">12 🪙</div>
            <p className="text-sm text-gray-600">Find hidden treasures!</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className={`inline-flex items-center gap-3 rounded-2xl px-6 py-4 ${
            coins >= 10 
              ? "bg-green-200 border-2 border-green-400" 
              : "bg-yellow-200 border-2 border-yellow-400"
          }`}>
            <div className="text-3xl">
              {coins >= 10 ? "🎉" : "📚"}
            </div>
            <div>
              <div className={`text-lg font-bold ${
                coins >= 10 ? "text-green-700" : "text-yellow-700"
              }`}>
                You have {coins} coins!
              </div>
              <div className={`text-sm ${
                coins >= 10 ? "text-green-600" : "text-yellow-600"
              }`}>
                {coins >= 10 
                  ? "Ready to play lots of games! 🎮" 
                  : "Do more lessons to earn coins for games!"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StoreItems = () => {
  const coins = useBoundStore((x) => x.coins);
  const spendCoins = useBoundStore((x) => x.spendCoins);
  const canAfford = useBoundStore((x) => x.canAfford);
  const [purchasedItems, setPurchasedItems] = useState<string[]>([]);

  const storeItems = [
    {
      id: "rainbow_pencil",
      name: "Rainbow Pencil",
      description: "Draw with all the colors!",
      icon: "🌈",
      cost: 8,
      category: "Art",
      color: "from-pink-400 to-pink-600",
    },
    {
      id: "star_sticker",
      name: "Shiny Star Sticker",
      description: "A beautiful star for being awesome!",
      icon: "⭐",
      cost: 3,
      category: "Stickers",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      id: "magic_hat",
      name: "Magic Learning Hat",
      description: "Makes you feel extra smart!",
      icon: "🎩",
      cost: 12,
      category: "Special",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      id: "happy_face",
      name: "Happy Face Badge",
      description: "Show everyone how happy you are!",
      icon: "😊",
      cost: 6,
      category: "Badges",
      color: "from-green-400 to-green-600",
    },
    {
      id: "treasure_chest",
      name: "Mystery Treasure",
      description: "What could be inside? Surprise!",
      icon: "📦",
      cost: 15,
      category: "Mystery",
      color: "from-orange-400 to-orange-600",
    },
    {
      id: "superhero_cape",
      name: "Learning Hero Cape",
      description: "You're a learning superhero!",
      icon: "🦸",
      cost: 20,
      category: "Special",
      color: "from-red-400 to-red-600",
    },
    {
      id: "music_note",
      name: "Happy Song",
      description: "A cheerful tune just for you!",
      icon: "🎵",
      cost: 4,
      category: "Music",
      color: "from-blue-400 to-blue-600",
    },
  ];

  const handlePurchase = (item: typeof storeItems[0]) => {
    if (canAfford(item.cost)) {
      const success = spendCoins(item.cost, item.name);
      if (success) {
        setPurchasedItems([...purchasedItems, item.id]);
        // Show celebration animation or feedback
      }
    }
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
        <span className="text-4xl">🛍️</span>
        Special Things to Collect
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {storeItems.map((item) => {
          const affordable = canAfford(item.cost);
          const purchased = purchasedItems.includes(item.id);
          
          return (
            <div
              key={item.id}
              className={`rounded-3xl p-6 text-center shadow-lg transform transition-all hover:scale-105 ${
                purchased
                  ? "bg-gradient-to-b from-green-300 to-green-400 border-4 border-green-500"
                  : affordable
                  ? `bg-gradient-to-b ${item.color} text-white`
                  : "bg-gradient-to-b from-gray-200 to-gray-300 text-gray-500"
              }`}
            >
              <div className={`text-5xl mb-3 ${affordable && !purchased ? "" : "grayscale"}`}>
                {item.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-2">{item.name}</h3>
              <p className={`text-sm mb-3 ${purchased ? "text-green-800" : affordable ? "text-white" : "text-gray-500"}`}>
                {item.description}
              </p>
              
              <div className="mb-3">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.category === "Games" ? "bg-purple-200 text-purple-700" :
                  item.category === "Art" ? "bg-pink-200 text-pink-700" :
                  item.category === "Special" ? "bg-yellow-200 text-yellow-700" :
                  "bg-blue-200 text-blue-700"
                }`}>
                  {item.category}
                </span>
              </div>

              {purchased ? (
                <div className="w-full py-3 rounded-xl bg-green-600 text-white font-bold">
                  ✅ You Own This!
                </div>
              ) : (
                <button
                  onClick={() => handlePurchase(item)}
                  disabled={!affordable}
                  className={`w-full py-3 rounded-xl font-bold transition ${
                    affordable
                      ? "bg-white text-gray-800 hover:bg-gray-100 shadow-lg"
                      : "bg-gray-400 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  {affordable ? `Buy for ${item.cost} 🪙` : `Need ${item.cost - coins} more 🪙`}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const CoinHistory = () => {
  const coins = useBoundStore((x) => x.coins);
  const totalCoinsEarned = useBoundStore((x) => x.totalCoinsEarned);
  const coinsSpent = totalCoinsEarned - coins;

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
        <span className="text-4xl">📊</span>
        Your Coin Story
      </h2>
      
      <div className="rounded-3xl bg-gradient-to-r from-indigo-100 to-purple-100 border-4 border-indigo-300 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="text-6xl mb-2">💎</div>
            <div className="text-3xl font-bold text-indigo-600">{totalCoinsEarned}</div>
            <div className="text-lg text-indigo-500">Total Earned</div>
          </div>
          
          <div className="text-center">
            <div className="text-6xl mb-2">🛒</div>
            <div className="text-3xl font-bold text-purple-600">{coinsSpent}</div>
            <div className="text-lg text-purple-500">Total Spent</div>
          </div>
          
          <div className="text-center">
            <div className="text-6xl mb-2">💰</div>
            <div className="text-3xl font-bold text-green-600">{coins}</div>
            <div className="text-lg text-green-500">Ready to Spend</div>
          </div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800 mb-2">
            {coins >= 100 
              ? "Wow! You're a coin collecting champion! 👑" 
              : coins >= 50 
              ? "Great job saving up your coins! 🌟" 
              : coins >= 25 
              ? "You're doing awesome! Keep earning! 🚀" 
              : "Complete more lessons to earn coins! 📚"}
          </div>
          <p className="text-lg text-gray-600">
            Keep learning to earn more coins and play even more games!
          </p>
        </div>
      </div>
    </section>
  );
};