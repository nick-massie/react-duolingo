import { type NextPage } from "next";
import Link from "next/link";
import { useBoundStore } from "~/hooks/useBoundStore";

const ParentDashboard: NextPage = () => {
  const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);
  const lingots = useBoundStore((x) => x.lingots);
  const streak = useBoundStore((x) => x.streak);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Parent Dashboard</h1>
              <p className="mt-1 text-sm text-gray-500">
                Track your child&apos;s learning progress
              </p>
            </div>
            <Link
              href="/"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Progress Overview */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Learning Progress</h3>
            <div className="mt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Lessons Completed</span>
                <span className="font-semibold text-blue-600">{lessonsCompleted}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Stars Earned</span>
                <span className="font-semibold text-yellow-600">{lingots}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Current Streak</span>
                <span className="font-semibold text-green-600">{streak} days</span>
              </div>
            </div>
          </div>

          {/* Story Progress */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Story Progress</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  <span className="text-sm">Penny&apos;s Math Adventures</span>
                </div>
                <span className="text-xs text-gray-500">In Progress</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌲</span>
                  <span className="text-sm">Ruby&apos;s Reading Quest</span>
                </div>
                <span className="text-xs text-gray-500">Locked</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <span className="text-sm">Nova&apos;s Social Skills</span>
                </div>
                <span className="text-xs text-gray-500">Locked</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            <div className="mt-4 space-y-3">
              <Link
                href="/learn"
                className="block rounded-lg bg-green-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-700"
              >
                Join Child&apos;s Session
              </Link>
              <Link
                href="/settings"
                className="block rounded-lg bg-gray-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gray-700"
              >
                Manage Settings
              </Link>
              <Link
                href="/help"
                className="block rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700"
              >
                Get Help
              </Link>
            </div>
          </div>

          {/* Learning Goals */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Learning Goals</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Daily Practice</span>
                <span className="text-xs text-green-600">✓ Completed</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Math Skills</span>
                <span className="text-xs text-blue-600">In Progress</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Reading Skills</span>
                <span className="text-xs text-gray-500">Not Started</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <div className="mt-4 space-y-3">
              <div className="text-sm">
                <div className="font-medium text-gray-900">Completed Tic-tac-toe Level 1</div>
                <div className="text-gray-500">2 hours ago</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-900">Earned 5 stars</div>
                <div className="text-gray-500">Yesterday</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-900">Started Math Adventures</div>
                <div className="text-gray-500">3 days ago</div>
              </div>
            </div>
          </div>

          {/* Tips for Parents */}
          <div className="rounded-lg bg-blue-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-900">Tips for Parents</h3>
            <div className="mt-4 space-y-3 text-sm text-blue-800">
              <p>• Encourage daily practice for best results</p>
              <p>• Celebrate small victories together</p>
              <p>• Let your child explore at their own pace</p>
              <p>• Use the practice mode for extra reinforcement</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ParentDashboard; 