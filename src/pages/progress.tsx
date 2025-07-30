import type { NextPage } from "next";
import { BottomBar } from "~/components/BottomBar";
import { LeftBar } from "~/components/LeftBar";
import { TopBar } from "~/components/TopBar";
import { useBoundStore } from "~/hooks/useBoundStore";
import { units } from "~/utils/units";
import { useState } from "react";

const Progress: NextPage = () => {
  return (
    <div>
      <TopBar />
      <LeftBar selectedTab="Progress" />
      <div className="flex justify-center gap-3 pt-14 md:ml-24 lg:ml-64 lg:gap-12">
        <div className="flex w-full max-w-4xl flex-col gap-6 p-5">
          <MyProgressHeader />
          <MyLearningJourney />
          <AchievementGallery />
          <SkillBadges />
          <FunStats />
        </div>
      </div>
      <div className="pt-[90px]"></div>
      <BottomBar selectedTab="Progress" />
    </div>
  );
};

export default Progress;

const MyProgressHeader = () => {
  const name = useBoundStore((x) => x.name) || "Superstar";
  const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);
  const streak = useBoundStore((x) => x.streak);
  const coins = useBoundStore((x) => x.coins);

  return (
    <section className="text-center">
      <div className="mb-4 text-8xl">🌟</div>
      <h1 className="mb-2 text-4xl font-bold text-gray-800">Look How Much You've Learned!</h1>
      <p className="mb-8 text-xl text-gray-600">You're doing amazing, {name}! 🎉</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-3xl bg-gradient-to-b from-green-100 to-green-200 p-6 text-center shadow-lg">
          <div className="text-6xl mb-2">📚</div>
          <div className="text-4xl font-bold text-green-700 mb-1">{lessonsCompleted}</div>
          <div className="text-lg text-green-600">Lessons Done!</div>
        </div>
        
        <div className="rounded-3xl bg-gradient-to-b from-orange-100 to-orange-200 p-6 text-center shadow-lg">
          <div className="text-6xl mb-2">🔥</div>
          <div className="text-4xl font-bold text-orange-700 mb-1">{streak}</div>
          <div className="text-lg text-orange-600">Days in a Row!</div>
        </div>
        
        <div className="rounded-3xl bg-gradient-to-b from-purple-100 to-purple-200 p-6 text-center shadow-lg">
          <div className="text-6xl mb-2">🪙</div>
          <div className="text-4xl font-bold text-purple-700 mb-1">{coins}</div>
          <div className="text-lg text-purple-600">Coins to Play!</div>
        </div>
      </div>
    </section>
  );
};

const MyLearningJourney = () => {
  const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
        <span className="text-4xl">🗺️</span>
        My Learning Adventure
      </h2>

      <div className="space-y-6">
        {units.map((unit, index) => {
          const unitLessons = unit.tiles.filter(tile => tile.type !== "treasure").length;
          const unitStartLesson = index * 6;
          const unitProgress = Math.max(0, Math.min(unitLessons, lessonsCompleted - unitStartLesson));
          const isStarted = lessonsCompleted > unitStartLesson;
          const isCompleted = unitProgress >= unitLessons;

          return (
            <div
              key={unit.unitNumber}
              className={`rounded-3xl p-6 shadow-lg transform transition-all hover:scale-105 ${
                isCompleted
                  ? "bg-gradient-to-r from-green-100 to-emerald-100 border-4 border-green-300"
                  : isStarted
                  ? "bg-gradient-to-r from-blue-100 to-cyan-100 border-4 border-blue-300"
                  : "bg-gradient-to-r from-gray-100 to-gray-200 border-4 border-gray-300"
              }`}
            >
              <div className="flex items-center gap-6">
                <div className={`text-8xl ${isStarted ? "" : "grayscale opacity-50"}`}>
                  {unit.unitNumber === 1 ? "🎨" : unit.unitNumber === 2 ? "📚" : "🚀"}
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${isStarted ? "text-gray-800" : "text-gray-400"}`}>
                    {unit.description}
                  </h3>
                  <div className="mb-4">
                    <div className={`text-lg ${isStarted ? "text-gray-600" : "text-gray-400"}`}>
                      {unitProgress} out of {unitLessons} lessons done!
                    </div>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-4">
                    <div
                      className={`h-4 rounded-full transition-all duration-1000 ${
                        isCompleted
                          ? "bg-green-500"
                          : isStarted
                          ? "bg-blue-500"
                          : "bg-gray-400"
                      }`}
                      style={{ width: `${(unitProgress / unitLessons) * 100}%` }}
                    />
                  </div>
                </div>
                {isCompleted && (
                  <div className="text-6xl animate-bounce">🏆</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const AchievementGallery = () => {
  const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);
  const streak = useBoundStore((x) => x.streak);
  
  const achievements = [
    {
      id: "first_lesson",
      title: "First Steps",
      description: "You did your very first lesson!",
      icon: "🎯",
      unlocked: lessonsCompleted >= 1,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: "five_lessons",
      title: "Learning Star",
      description: "You completed 5 whole lessons!",
      icon: "🚀",
      unlocked: lessonsCompleted >= 5,
      color: "from-green-400 to-green-600",
    },
    {
      id: "penny_helper",
      title: "Penny's Best Friend",
      description: "You helped Penny find all her colors!",
      icon: "🎨",
      unlocked: lessonsCompleted >= 4,
      color: "from-pink-400 to-pink-600",
    },
    {
      id: "streak_starter",
      title: "Daily Champion",
      description: "You learned 3 days in a row!",
      icon: "🔥",
      unlocked: streak >= 3,
      color: "from-orange-400 to-orange-600",
    },
    {
      id: "super_learner",
      title: "Amazing Learner",
      description: "Wow! You finished 15 lessons!",
      icon: "⭐",
      unlocked: lessonsCompleted >= 15,
      color: "from-purple-400 to-purple-600",
    },
    {
      id: "week_warrior",
      title: "Week Winner",
      description: "You learned every day for a week!",
      icon: "👑",
      unlocked: streak >= 7,
      color: "from-yellow-400 to-yellow-600",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
        <span className="text-4xl">🏆</span>
        My Awesome Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`rounded-3xl p-6 text-center shadow-lg transform transition-all hover:scale-105 ${
              achievement.unlocked
                ? `bg-gradient-to-b ${achievement.color} text-white`
                : "bg-gradient-to-b from-gray-200 to-gray-300 text-gray-500"
            }`}
          >
            <div className={`text-6xl mb-4 ${achievement.unlocked ? "" : "grayscale"}`}>
              {achievement.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
            <p className={`text-sm ${achievement.unlocked ? "text-white" : "text-gray-500"}`}>
              {achievement.description}
            </p>
            {achievement.unlocked && (
              <div className="mt-4 text-2xl animate-pulse">✨</div>
            )}
            {!achievement.unlocked && (
              <div className="mt-4 text-xs opacity-75">Keep learning to unlock!</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const SkillBadges = () => {
  const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);

  const skillBadges = [
    {
      name: "Number Explorer",
      icon: "🔢",
      description: "I can count and recognize numbers!",
      unlocked: lessonsCompleted >= 2,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Color Master",
      icon: "🎨",
      description: "I know all my colors!",
      unlocked: lessonsCompleted >= 4,
      color: "from-pink-400 to-pink-600",
    },
    {
      name: "Letter Detective",
      icon: "🔤",
      description: "I can find and name letters!",
      unlocked: lessonsCompleted >= 6,
      color: "from-green-400 to-green-600",
    },
    {
      name: "Shape Champion",
      icon: "🔵",
      description: "I know circles, squares, and more!",
      unlocked: lessonsCompleted >= 8,
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "Super Friend",
      icon: "🤝",
      description: "I'm great at sharing and being kind!",
      unlocked: lessonsCompleted >= 10,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Learning Star",
      icon: "⭐",
      description: "I love to learn new things!",
      unlocked: lessonsCompleted >= 15,
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
        <span className="text-4xl">🏅</span>
        My Super Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillBadges.map((badge, index) => (
          <div
            key={index}
            className={`rounded-3xl p-6 text-center shadow-lg transform transition-all hover:scale-105 ${
              badge.unlocked
                ? `bg-gradient-to-b ${badge.color} text-white`
                : "bg-gradient-to-b from-gray-200 to-gray-300 text-gray-500"
            }`}
          >
            <div className={`text-6xl mb-4 ${badge.unlocked ? "" : "grayscale"}`}>
              {badge.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{badge.name}</h3>
            <p className={`text-sm ${badge.unlocked ? "text-white" : "text-gray-500"}`}>
              {badge.description}
            </p>
            {badge.unlocked && (
              <div className="mt-4 text-2xl animate-pulse">✨</div>
            )}
            {!badge.unlocked && (
              <div className="mt-4 text-xs opacity-75">Keep learning to unlock!</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const FunStats = () => {
  const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);
  const streak = useBoundStore((x) => x.streak);
  const coins = useBoundStore((x) => x.coins);

  const funFacts = [
    {
      icon: "🧠",
      title: "Brain Power!",
      fact: `You've made your brain ${lessonsCompleted * 3} times stronger!`,
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: "⏰",
      title: "Time Champion!",
      fact: `You spent ${lessonsCompleted * 8} minutes learning - that's awesome!`,
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: "🎯",
      title: "Goal Getter!",
      fact: streak >= 3 ? "You're on fire with your streak!" : "Every day you learn, you grow!",
      color: "from-green-400 to-green-600"
    },
    {
      icon: "🌈",
      title: "Color Expert!",
      fact: "Did you know you can see over 10 million colors? Amazing!",
      color: "from-pink-400 to-pink-600"
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
        <span className="text-4xl">🎉</span>
        Fun Facts About You!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {funFacts.map((fact, index) => (
          <div
            key={index}
            className={`rounded-3xl bg-gradient-to-b ${fact.color} text-white p-6 text-center shadow-lg transform transition-all hover:scale-105`}
          >
            <div className="text-5xl mb-3">{fact.icon}</div>
            <h3 className="text-xl font-bold mb-2">{fact.title}</h3>
            <p className="text-sm opacity-90">{fact.fact}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl bg-gradient-to-r from-yellow-100 to-orange-100 border-4 border-yellow-300 p-8 text-center">
        <div className="text-6xl mb-4">🏆</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {lessonsCompleted >= 10 
            ? "You're a Learning Superstar!" 
            : lessonsCompleted >= 5 
            ? "You're Doing Great!" 
            : "Welcome to Your Learning Adventure!"}
        </h3>
        <p className="text-lg text-gray-700">
          {lessonsCompleted >= 10 
            ? "Wow! You've learned so much! Keep being amazing!" 
            : lessonsCompleted >= 5 
            ? "You're getting really good at this! Keep it up!" 
            : "Every lesson makes you smarter! Let's keep learning together!"}
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <div className="text-4xl animate-bounce">🌟</div>
          <div className="text-4xl animate-bounce" style={{animationDelay: '0.1s'}}>⭐</div>
          <div className="text-4xl animate-bounce" style={{animationDelay: '0.2s'}}>🌟</div>
        </div>
      </div>
    </section>
  );
};