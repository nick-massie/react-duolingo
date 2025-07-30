import Link from "next/link";
import type { ComponentProps } from "react";
import React, { useState } from "react";
import type { Tab } from "./BottomBar";
import { useBottomBarItems } from "./BottomBar";
import type { LoginScreenState } from "./LoginScreen";
import { LoginScreen } from "./LoginScreen";

import { useBoundStore } from "~/hooks/useBoundStore";

const LeftBarMoreMenuSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" {...props}>
      <circle
        cx="23"
        cy="23"
        r="19"
        fill="#CE82FF"
        stroke="#CE82FF"
        strokeWidth="2"
      />
      <circle cx="15" cy="23" r="2" fill="white" />
      <circle cx="23" cy="23" r="2" fill="white" />
      <circle cx="31" cy="23" r="2" fill="white" />
    </svg>
  );
};

export const LeftBar = ({ selectedTab }: { selectedTab: Tab | null }) => {
  const loggedIn = useBoundStore((x) => x.loggedIn);
  const logOut = useBoundStore((x) => x.logOut);
  const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);
  const increaseLessonsCompleted = useBoundStore((x) => x.increaseLessonsCompleted);

  const [moreMenuShown, setMoreMenuShown] = useState(false);
  const [showDevTools, setShowDevTools] = useState(false);
  const [loginScreenState, setLoginScreenState] =
    useState<LoginScreenState>("HIDDEN");

  const bottomBarItems = useBottomBarItems();

  return (
    <>
      <nav className="fixed bottom-0 left-0 top-0 hidden flex-col gap-5 border-r-2 border-[#e5e5e5] bg-white p-3 md:flex lg:w-64 lg:p-5">
        <Link
          href="/"
          className="mb-5 ml-5 mt-5 hidden text-3xl font-bold text-[#58cc02] lg:block"
        >
          AdaptEd
        </Link>
        <ul className="flex flex-col items-stretch gap-3">
          {bottomBarItems.filter(item => item.name !== "Profile").map((item) => {
            return (
              <li key={item.href} className="flex flex-1">
                {item.name === selectedTab ? (
                  <Link
                    href={item.href}
                    className="flex grow items-center gap-3 rounded-xl border-2 border-[#84d8ff] bg-[#ddf4ff] px-2 py-1 text-sm font-bold uppercase text-blue-400"
                  >
                    {item.icon}{" "}
                    <span className="sr-only lg:not-sr-only">{item.name}</span>
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="flex grow items-center gap-3 rounded-xl px-2 py-1 text-sm font-bold uppercase text-gray-400 hover:bg-gray-100"
                  >
                    {item.icon}{" "}
                    <span className="sr-only lg:not-sr-only">{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
          <div
            className="relative flex grow cursor-default items-center gap-3 rounded-xl px-2 py-1 font-bold uppercase text-gray-400 hover:bg-gray-100"
            onClick={() => setMoreMenuShown((x) => !x)}
            onMouseEnter={() => setMoreMenuShown(true)}
            onMouseLeave={() => setMoreMenuShown(false)}
            role="button"
            tabIndex={0}
          >
            <LeftBarMoreMenuSvg />{" "}
            <span className="hidden text-sm lg:inline">More</span>
            <div
              className={[
                "absolute left-full top-[-10px] min-w-[300px] rounded-2xl border-2 border-gray-300 bg-white text-left text-gray-400",
                moreMenuShown ? "" : "hidden",
              ].join(" ")}
            >
              <div className="flex flex-col py-2">
                <Link
                  className="flex items-center gap-4 px-5 py-2 text-left uppercase hover:bg-gray-100"
                  href="#"
                >
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Help
                </Link>
                <Link
                  className="flex items-center gap-4 px-5 py-2 text-left uppercase hover:bg-gray-100"
                  href="#"
                >
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  Parents
                </Link>
              </div>
              <div className="flex flex-col border-t-2 border-gray-300 py-2">
                {!loggedIn && (
                  <button
                    disabled={true}
                    className="px-5 py-2 text-left uppercase hover:bg-gray-100"
                    onClick={() => setLoginScreenState("SIGNUP")}
                  >
                    Create a profile
                  </button>
                )}
                <Link
                  className="px-5 py-2 text-left uppercase hover:bg-gray-100"
                  href={"#"}
                >
                  Settings
                </Link>
                <Link
                  className="px-5 py-2 text-left uppercase hover:bg-gray-100"
                  href="#"
                >
                  Help
                </Link>
                {!loggedIn && (
                  <button
                    disabled={true}
                    className="px-5 py-2 text-left uppercase hover:bg-gray-100"
                    onClick={() => setLoginScreenState("LOGIN")}
                  >
                   Sign out
                  </button>
                )}
                {loggedIn && (
                  <button
                    disabled={true}
                    className="px-5 py-2 text-left uppercase hover:bg-gray-100"
                    onClick={logOut}
                  >
                    Sign out
                  </button>
                )}
              </div>
            </div>
          </div>
        </ul>
        
        {/* Developer Tools */}
        <div className="mt-auto border-t-2 border-gray-200 pt-3">
          <button
            onClick={() => setShowDevTools(!showDevTools)}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-gray-600 hover:bg-gray-100"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="hidden lg:inline">Dev Tools</span>
            <svg 
              className={`ml-auto h-4 w-4 transition-transform ${showDevTools ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showDevTools && (
            <div className="mt-2 space-y-2 px-3">
              <div className="rounded-lg bg-gray-100 p-3">
                <h4 className="mb-2 text-xs font-bold uppercase text-gray-600">Progress Simulator</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Lessons: {lessonsCompleted}/15</span>
                    <div className="flex gap-1">
                      <button
                        onClick={() => increaseLessonsCompleted(-1)}
                        disabled={lessonsCompleted <= 0}
                        className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600 disabled:bg-gray-300"
                      >
                        -
                      </button>
                      <button
                        onClick={() => increaseLessonsCompleted(1)}
                        className="rounded bg-green-500 px-2 py-1 text-white hover:bg-green-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <h5 className="text-xs font-semibold">Quick Jump:</h5>
                    <div className="grid grid-cols-2 gap-1">
                      <button
                        onClick={() => {
                          const diff = 0 - lessonsCompleted;
                          if (diff !== 0) increaseLessonsCompleted(diff);
                        }}
                        className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                      >
                        Start (0)
                      </button>
                      <button
                        onClick={() => {
                          const diff = 1 - lessonsCompleted;
                          if (diff !== 0) increaseLessonsCompleted(diff);
                        }}
                        className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                      >
                        Level 2 (1)
                      </button>
                      <button
                        onClick={() => {
                          const diff = 5 - lessonsCompleted;
                          if (diff !== 0) increaseLessonsCompleted(diff);
                        }}
                        className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                      >
                        Story 2 (5)
                      </button>
                      <button
                        onClick={() => {
                          const diff = 10 - lessonsCompleted;
                          if (diff !== 0) increaseLessonsCompleted(diff);
                        }}
                        className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                      >
                        Story 3 (10)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg bg-yellow-100 p-3">
                <h4 className="mb-2 text-xs font-bold uppercase text-gray-600">Quick Play</h4>
                <div className="grid grid-cols-1 gap-1">
                  <Link
                    href="/lesson?game=tic-tac-toe&unit=1&level=1"
                    className="rounded bg-purple-500 px-2 py-1 text-center text-xs text-white hover:bg-purple-600"
                  >
                    Tic-Tac-Toe (L1)
                  </Link>
                  <Link
                    href="/lesson?game=bingo&unit=1&level=2"
                    className="rounded bg-purple-500 px-2 py-1 text-center text-xs text-white hover:bg-purple-600"
                  >
                    Bingo (L2)
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </>
  );
};
