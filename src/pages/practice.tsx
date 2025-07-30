import { type NextPage } from "next";
import Link from "next/link";
import { TopBar } from "~/components/TopBar";
import { BottomBar } from "~/components/BottomBar";
import { RightBar } from "~/components/RightBar";
import { LeftBar } from "~/components/LeftBar";
import { useLoginScreen, LoginScreen } from "~/components/LoginScreen";

const Practice: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();

  return (
    <>
      <TopBar />
      <LeftBar selectedTab="Practice" />

      <div className="flex justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
        <div className="flex max-w-2xl grow flex-col">
          {/* Today's Practice */}
          <section className="mb-8">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-bold">Today&apos;s Practice</h2>
                  <p className="text-lg opacity-90">
                    Keep your skills sharp with fun games!
                  </p>
                  <Link
                    href="/lesson?practice"
                    className="w-fit rounded-xl bg-white px-6 py-3 text-center font-bold text-purple-600 transition hover:bg-gray-100"
                  >
                    START +20 COINS
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-400">
                    <span className="text-lg">📚</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 flex h-8 w-8 items-center justify-center rounded-full bg-pink-400">
                    <span className="text-lg">💬</span>
                  </div>
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-500">
                    <span className="text-5xl">🎮</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400">
                    <span className="text-sm">⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Game Types */}
          <section className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-gray-900">Game Types</h3>
            <div className="space-y-4">
              <Link
                href="/lesson?game=tic-tac-toe"
                className="flex items-center justify-between rounded-xl bg-gray-800 p-6 text-white transition hover:bg-gray-700"
              >
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold">Tic-tac-toe</h4>
                  <p className="text-sm opacity-80">
                    Practice math skills with X&apos;s and O&apos;s
                  </p>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500">
                  <span className="text-4xl">⭕</span>
                </div>
              </Link>

              <Link
                href="/lesson?game=bingo"
                className="flex items-center justify-between rounded-xl bg-gray-800 p-6 text-white transition hover:bg-gray-700"
              >
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold">Bingo</h4>
                  <p className="text-sm opacity-80">
                    Learn reading and matching with Bingo
                  </p>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
                  <span className="text-4xl">🎲</span>
                </div>
              </Link>

              <Link
                href="/lesson?game=chutes-ladders"
                className="flex items-center justify-between rounded-xl bg-gray-800 p-6 text-white transition hover:bg-gray-700"
              >
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold">Chutes & Ladders</h4>
                  <p className="text-sm opacity-80">
                    Build social skills with climbing and sliding
                  </p>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                  <span className="text-4xl">🪜</span>
                </div>
              </Link>
            </div>
          </section>

          {/* Your Progress */}
          <section className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-gray-900">Your Progress</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-gray-800 p-6 text-white">
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold">Mistakes</h4>
                  <p className="text-sm opacity-80">
                    Practice the skills you need to improve
                  </p>
                </div>
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500">
                    <span className="text-4xl">🔄</span>
                  </div>
                  <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
                    2
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-800 p-6 text-white">
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold">Skills</h4>
                  <p className="text-sm opacity-80">
                    Review your math, reading, and social skills
                  </p>
                </div>
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
                    <span className="text-4xl">⭐</span>
                  </div>
                  <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
                    30+
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Practice */}
          <section className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-gray-900">Quick Practice</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/lesson?quick=math"
                className="rounded-xl bg-gradient-to-br from-red-500 to-pink-500 p-6 text-white transition hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold">Math Practice</h4>
                    <p className="text-sm opacity-90">Quick math challenges</p>
                  </div>
                  <span className="text-3xl">🔢</span>
                </div>
              </Link>

              <Link
                href="/lesson?quick=reading"
                className="rounded-xl bg-gradient-to-br from-green-500 to-blue-500 p-6 text-white transition hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold">Reading Practice</h4>
                    <p className="text-sm opacity-90">Word and letter games</p>
                  </div>
                  <span className="text-3xl">📖</span>
                </div>
              </Link>

              <Link
                href="/lesson?quick=social"
                className="rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 p-6 text-white transition hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold">Social Skills</h4>
                    <p className="text-sm opacity-90">Friendship and sharing</p>
                  </div>
                  <span className="text-3xl">🤝</span>
                </div>
              </Link>

              <Link
                href="/lesson?quick=mixed"
                className="rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 p-6 text-white transition hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold">Mixed Review</h4>
                    <p className="text-sm opacity-90">A little bit of everything</p>
                  </div>
                  <span className="text-3xl">🎯</span>
                </div>
              </Link>
            </div>
          </section>
        </div>
        <RightBar />
      </div>

      <div className="pt-[90px]"></div>

      <BottomBar selectedTab="Practice" />
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </>
  );
};

export default Practice; 