import type { BoundStateCreator } from "~/hooks/useBoundStore";

export type CoinSlice = {
  coins: number;
  totalCoinsEarned: number;
  earnCoins: (amount: number, source: string) => void;
  spendCoins: (amount: number, item: string) => boolean;
  canAfford: (amount: number) => boolean;
};

export const createCoinSlice: BoundStateCreator<CoinSlice> = (set, get) => ({
  coins: 200, // Start with plenty of coins so they can enjoy playing
  totalCoinsEarned: 200,
  earnCoins: (amount: number, source: string) => {
    const currentCoins = get().coins;
    const totalEarned = get().totalCoinsEarned;
    set({ 
      coins: currentCoins + amount,
      totalCoinsEarned: totalEarned + amount
    });
    console.log(`Earned ${amount} coins from ${source}! Total: ${currentCoins + amount}`);
  },
  spendCoins: (amount: number, item: string) => {
    const currentCoins = get().coins;
    if (currentCoins >= amount) {
      set({ coins: currentCoins - amount });
      console.log(`Spent ${amount} coins on ${item}! Remaining: ${currentCoins - amount}`);
      return true;
    }
    console.log(`Not enough coins to buy ${item}. Need ${amount}, have ${currentCoins}`);
    return false;
  },
  canAfford: (amount: number) => {
    return get().coins >= amount;
  },
});