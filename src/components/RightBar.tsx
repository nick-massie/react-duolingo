import Link from "next/link";
import React, { useState } from "react";

import {
  LightningProgressSvg,
  TreasureProgressSvg,
} from "./Svgs";
import { useBoundStore } from "~/hooks/useBoundStore";
import type { LoginScreenState } from "./LoginScreen";
import { LoginScreen } from "./LoginScreen";


export const RightBar = () => {
  const [loginScreenState, setLoginScreenState] =
    useState<LoginScreenState>("HIDDEN");

  return (
    <>
      <aside className="sticky top-0 hidden w-96 flex-col gap-6 self-start sm:flex">


        <StoryCharactersSection />
        <DailyQuestsSection />
        <CoinInfoSection />
      </aside>
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </>
  );
};

const StoryCharactersSection = () => {
  return (
    <article className="flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 text-gray-700">
      <h2 className="text-xl font-bold">My Learning Friends</h2>
      <div className="flex flex-col gap-4">
        <Link
          href="/learn"
          className="flex items-center gap-4 rounded-xl border-2 border-red-200 bg-red-50 p-4 transition hover:bg-red-100"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500">
            <span className="text-2xl">🎨</span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-red-700">Penny the Painter</h3>
            <p className="text-sm text-red-600">Math Adventures</p>
          </div>
        </Link>
        
        <Link
          href="/learn"
          className="flex items-center gap-4 rounded-xl border-2 border-green-200 bg-green-50 p-4 transition hover:bg-green-100"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
            <span className="text-2xl">🌳</span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-green-700">Ranger Ruby</h3>
            <p className="text-sm text-green-600">Reading Quest</p>
          </div>
        </Link>
        
        <Link
          href="/learn"
          className="flex items-center gap-4 rounded-xl border-2 border-blue-200 bg-blue-50 p-4 transition hover:bg-blue-100"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
            <span className="text-2xl">🚀</span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-blue-700">Nova the Explorer</h3>
            <p className="text-sm text-blue-600">Social Skills</p>
          </div>
        </Link>
      </div>
    </article>
  );
};



const DailyQuestsSection = () => {
  const xpToday = useBoundStore((x) => x.xpToday());
  const goalXp = useBoundStore((x) => x.goalXp);
  return (
    <article className="flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 font-bold text-gray-700">
      <h2 className="text-xl">Daily Goals</h2>
      <div className="flex items-center gap-4">
        <LightningProgressSvg />
        <div className="flex flex-col gap-2">
          <h3>Earn {goalXp} coins</h3>
          <div className="flex items-center">
            <div className="relative h-5 w-52 rounded-l-full bg-gray-200">
              <div
                className={[
                  "relative h-full rounded-l-full bg-yellow-400",
                  xpToday === 0 ? "" : "px-2",
                ].join(" ")}
                style={{ width: `${Math.min(1, xpToday / goalXp) * 100}%` }}
              >
                <div className="absolute left-2 right-0 top-1 h-2 rounded-l-full bg-yellow-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-sm text-gray-400">
                {xpToday} / {goalXp}
              </div>
            </div>
            <TreasureProgressSvg />
          </div>
        </div>
      </div>
    </article>
  );
};




const CoinInfoSection = () => {
  const coins = useBoundStore((x) => x.coins);
  const totalCoinsEarned = useBoundStore((x) => x.totalCoinsEarned);
  return (
    <article className="flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 font-bold text-gray-700">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">My Coins</h2>
        <Link href="/store" className="uppercase text-blue-400">
          Go to Store
        </Link>
      </div>
      <div className="flex gap-5">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 to-yellow-500 shadow-lg">
          <span className="text-4xl">🪙</span>
        </div>
        <div className="flex grow flex-col justify-around">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold text-yellow-600">{coins}</h3>
            <p className="font-normal text-gray-500">Ready to spend!</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm font-normal text-gray-400">
              Total earned: {totalCoinsEarned} coins
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Link 
          href="/arcade" 
          className="flex-1 rounded-xl bg-purple-100 py-3 text-center text-sm font-bold text-purple-700 transition hover:bg-purple-200"
        >
          🎮 Play Games
        </Link>
        <Link 
          href="/store" 
          className="flex-1 rounded-xl bg-yellow-100 py-3 text-center text-sm font-bold text-yellow-700 transition hover:bg-yellow-200"
        >
          🛍️ Buy Items
        </Link>
      </div>
    </article>
  );
};


