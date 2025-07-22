import { type NextPage } from "next";
import Link from "next/link";
import { GlobeSvg } from "~/components/Svgs";
import React from "react";
import { useLoginScreen, LoginScreen } from "~/components/LoginScreen";
import _bgSnow from "../../public/bg-snow.svg";
import type { StaticImageData } from "next/image";

const bgSnow = _bgSnow as StaticImageData;

const Home: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-[#235390] text-white"
      style={{ backgroundImage: `url(${bgSnow.src})` }}
    >
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 flex min-h-[70px] items-center bg-[#235390] px-72 font-bold text-white">
        <Link className="text-4xl" href="/">
          AdaptEd
        </Link>
      </header>

      {/* Main Content */}
      <div className="flex w-full flex-col items-center justify-center gap-3 px-4 py-16 md:flex-row md:gap-36">
        <GlobeSvg className="h-fit w-7/12 md:w-[360px]" />
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold md:text-5xl">
            Welcome to AdaptEd!
          </h1>
          <p className="mx-auto mb-8 max-w-[600px] text-xl font-medium opacity-90 md:mb-12">
            The fun and effective way to learn math, reading, and social skills!
          </p>
          
          {/* Profile Selection Cards */}
          <div className="mx-auto mt-8 flex w-fit flex-col items-center gap-6 md:flex-row">
            {/* Parent Profile Card */}
            <Link
              href="/parent-dashboard"
              className="group flex w-full flex-col items-center rounded-2xl border-2 border-white/20 bg-white/10 p-8 transition-all hover:bg-white/20 hover:scale-105 md:w-48"
            >
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-blue-500 text-4xl shadow-lg">
                👨‍👩‍👧‍👦
              </div>
              <h3 className="text-xl font-bold">Parent</h3>
              <p className="mt-2 text-center text-sm opacity-80">
                Track progress and manage settings
              </p>
            </Link>

            {/* Child Profile Cards */}
            <Link
              href="/learn"
              className="group flex w-full flex-col items-center rounded-2xl border-2 border-white/20 bg-white/10 p-8 transition-all hover:bg-white/20 hover:scale-105 md:w-48"
            >
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green-500 text-4xl shadow-lg">
                🧒
              </div>
              <h3 className="text-xl font-bold">Alex</h3>
              <p className="mt-2 text-center text-sm opacity-80">
                Start learning and playing games
              </p>
            </Link>

            <Link
              href="/learn"
              className="group flex w-full flex-col items-center rounded-2xl border-2 border-white/20 bg-white/10 p-8 transition-all hover:bg-white/20 hover:scale-105 md:w-48"
            >
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-purple-500 text-4xl shadow-lg">
                👧
              </div>
              <h3 className="text-xl font-bold">Emma</h3>
              <p className="mt-2 text-center text-sm opacity-80">
                Start learning and playing games
              </p>
            </Link>

            {/* Add Profile Card */}
            <button className="group flex w-full flex-col items-center rounded-2xl border-2 border-dashed border-white/30 bg-white/5 p-8 transition-all hover:bg-white/10 hover:scale-105 md:w-48">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-500 text-4xl shadow-lg">
                ➕
              </div>
              <h3 className="text-xl font-bold">Add Child</h3>
              <p className="mt-2 text-center text-sm opacity-80">
                Create a new learning profile
              </p>
            </button>
          </div>

          {/* Profile Management */}
          <div className="mt-8 text-center">
            <button className="text-sm opacity-70 hover:opacity-100">
              Manage Profiles
            </button>
          </div>
        </div>
      </div>

      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </main>
  );
};

export default Home;
