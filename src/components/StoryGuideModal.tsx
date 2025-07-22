import React from "react";
import { units } from "~/utils/units";

interface StoryGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  unitNumber: number;
}

const PennyCharacter = () => (
  <div className="relative inline-block">
    <div className="h-24 w-24 rounded-full bg-pink-400 p-5 shadow-lg">
      <span className="text-5xl">🎨</span>
    </div>
    <div className="absolute -bottom-3 -right-3 h-12 w-12 rounded-full bg-yellow-400 p-2 shadow-md">
      <span className="text-2xl">✨</span>
    </div>
  </div>
);

const PaintBrushIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path
      d="M28 12L12 28L8 32L8 32C8 32 12 32 16 28L32 12C33 11 33 9 32 8C31 7 29 7 28 8"
      stroke="#ff6b6b"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M8 32C8 32 4 36 4 36C4 36 4 32 8 32Z"
      fill="#ff6b6b"
    />
    <circle cx="10" cy="10" r="3" fill="#FFD700" />
    <circle cx="15" cy="8" r="2" fill="#4ECDC4" />
    <circle cx="8" cy="15" r="2" fill="#BB8FCE" />
  </svg>
);

const PaintPaletteIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <ellipse cx="30" cy="30" rx="25" ry="20" fill="#f8f8f8" stroke="#ff6b6b" strokeWidth="3" />
    <circle cx="20" cy="20" r="5" fill="#FF6B6B" />
    <circle cx="40" cy="20" r="5" fill="#4ECDC4" />
    <circle cx="20" cy="35" r="5" fill="#FFD700" />
    <circle cx="40" cy="35" r="5" fill="#BB8FCE" />
    <path
      d="M45 30C45 30 48 30 48 33C48 36 45 36 45 36"
      stroke="#8B4513"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const StoryGuideModal: React.FC<StoryGuideModalProps> = ({
  isOpen,
  onClose,
  unitNumber,
}) => {
  if (!isOpen) return null;

  const unit = units.find(u => u.unitNumber === unitNumber);
  if (!unit) return null;

  // Get the tiles without treasure chests for display
  const gameTiles = unit.tiles.filter(tile => tile.type !== "treasure");

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-x-0 top-[5%] bottom-[5%] z-50 mx-auto flex w-full max-w-2xl items-center justify-center px-4">
        <div className="relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-b from-red-50 to-pink-50 shadow-2xl">
          {/* Header */}
          <header className="relative bg-gradient-to-r from-[#ff6b6b] to-[#ff8787] p-6 text-white">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-white/20 p-2 transition hover:bg-white/30"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex items-center gap-4">
              <PennyCharacter />
              <div>
                <h2 className="text-3xl font-bold">Story Guide</h2>
                <p className="text-lg opacity-90">{unit.description}</p>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="h-[calc(100%-200px)] overflow-y-auto p-6">
            {/* Story Introduction */}
            <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg">
              <div className="mb-4 flex justify-center">
                <PaintPaletteIcon />
              </div>
              <h3 className="mb-3 text-center text-2xl font-bold text-gray-800">
                Penny&apos;s Paint Adventure! 🎨
              </h3>
              <p className="text-center text-lg text-gray-600">
                {unit.story}
              </p>
              <div className="mt-4 text-center">
                <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800">
                  Collect all the colors to restore Penny&apos;s magic! ✨
                </span>
              </div>
            </div>

            {/* Learning Path */}
            <div className="space-y-4">
              <h3 className="text-center text-xl font-bold text-gray-800">
                Your Learning Journey 🛤️
              </h3>
              
              {gameTiles.map((tile, index) => (
                <div
                  key={index}
                  className="relative rounded-xl bg-white p-4 shadow-md transition hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    {/* Level Number */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-pink-400 text-xl font-bold text-white shadow-md">
                      {index + 1}
                    </div>
                    
                    {/* Level Info */}
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800">
                        {tile.description}
                      </h4>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                          {tile.gameType?.replace('-', ' ')}
                        </span>
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                          {tile.difficulty?.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                    
                    {/* Game Icon */}
                    <div className="text-3xl">
                      {tile.type === "star" && "⭐"}
                      {tile.type === "book" && "📚"}
                      {tile.type === "trophy" && "🏆"}
                    </div>
                  </div>
                  
                  {/* Progress Line */}
                  {index < gameTiles.length - 1 && (
                    <div className="absolute -bottom-4 left-6 h-8 w-0.5 bg-gradient-to-b from-red-300 to-transparent" />
                  )}
                </div>
              ))}
            </div>

            {/* Fun Facts */}
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-yellow-100 to-orange-100 p-6">
              <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
                Fun Paint Facts! 🎨
              </h3>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🔴</span>
                  <p className="text-sm text-gray-700">Red and yellow make orange!</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🔵</span>
                  <p className="text-sm text-gray-700">Blue and yellow make green!</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🟣</span>
                  <p className="text-sm text-gray-700">Red and blue make purple!</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🌈</span>
                  <p className="text-sm text-gray-700">Mix all colors for a rainbow!</p>
                </div>
              </div>
            </div>

            {/* Motivational Message */}
            <div className="mt-6 text-center">
              <PaintBrushIcon />
              <p className="mt-2 text-lg font-medium text-gray-600">
                Ready to help Penny? Let&apos;s paint with numbers! 🎨
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
            <button
              onClick={onClose}
              className="w-full rounded-xl bg-gradient-to-r from-red-500 to-pink-500 py-3 text-lg font-bold text-white shadow-lg transition hover:from-red-600 hover:to-pink-600"
            >
              Let's Learn! 🚀
            </button>
          </div>
        </div>
      </div>
    </>
  );
}; 