"use client";

import { motion } from "framer-motion";

const dailyMissions = [
  { title: "Daily Login", reward: "CC Tokens", icon: "check_circle", completed: true },
  { title: "Complete a Transfer", reward: "CC Tokens", icon: "arrow_outward", completed: false },
  { title: "Invite a Friend", reward: "CC Tokens", icon: "group_add", completed: false },
];

const achievements = [
  { title: "First Steps", icon: "flag", unlocked: true },
  { title: "Streak Master", icon: "local_fire_department", unlocked: true },
  { title: "Networker", icon: "share", unlocked: false },
  { title: "CC Holder", icon: "verified_user", unlocked: false },
];

export default function RewardsEngine() {
  return (
    <section id="rewards" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="neon-orb top-20 right-0 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-[#0d0d0d]/80 backdrop-blur-sm border border-[#875CFF]/20 rounded-full px-4 py-2 mb-6">
              <span className="material-symbols-outlined text-[#875CFF] text-sm">redeem</span>
              <span className="text-sm text-[#A89F91]">Rewards Engine</span>
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Earn While You{" "}
              <span className="gradient-text">Trade & Hold</span>
            </h2>

            <p className="text-[#A89F91] text-lg mb-8">
              Our gamified rewards system turns everyday crypto activities into earning opportunities.
              Complete missions, maintain streaks, and climb the leaderboard.
            </p>

            {/* Reward Features */}
            <div className="space-y-4">
              {[
                { icon: "local_fire_department", title: "Daily Streaks", desc: "Earn bonus rewards for consecutive daily logins" },
                { icon: "military_tech", title: "Achievement Badges", desc: "Unlock exclusive badges and recognition" },
                { icon: "trending_up", title: "Leaderboard", desc: "Compete with other users and climb the ranks" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#875CFF]/20 to-[#D5A5E3]/10 border border-[#875CFF]/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#875CFF]">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-[#A89F91] text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="perspective-card"
          >
            <div className="rotated-surface glass-card rounded-2xl p-5 hover:border-[#875CFF]/40 transition-all duration-500 max-w-sm shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[#A89F91] text-xs">Your CC Tokens</div>
                  <div className="text-2xl font-bold gradient-text">Earn Daily</div>
                </div>
                <div className="flex items-center gap-1.5 bg-[#F3FF97]/10 text-[#F3FF97] px-2.5 py-1 rounded-full text-sm">
                  <span className="material-symbols-outlined text-base">whatshot</span>
                  <span className="font-medium">Active Streak</span>
                </div>
              </div>

              {/* Streak Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-[#A89F91]">Weekly Progress</span>
                  <span className="text-[#875CFF]">Level 3</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <div
                      key={day}
                      className={`flex-1 h-1.5 rounded-full ${
                        day <= 5 ? "bg-gradient-to-r from-[#875CFF] to-[#D5A5E3]" : "bg-[#2a2a2a]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Daily Missions */}
              <div className="mb-4">
                <div className="text-white text-sm font-medium mb-2">Daily Missions</div>
                <div className="space-y-1.5">
                  {dailyMissions.map((mission, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between p-2 rounded-lg border ${
                        mission.completed
                          ? "bg-[#875CFF]/10 border-[#875CFF]/30"
                          : "bg-[#1a1a1a] border-[#2a2a2a]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded flex items-center justify-center ${
                          mission.completed ? "bg-[#875CFF]/20" : "bg-[#2a2a2a]"
                        }`}>
                          <span className={`material-symbols-outlined text-sm ${
                            mission.completed ? "text-[#875CFF]" : "text-[#A89F91]"
                          }`}>
                            {mission.icon}
                          </span>
                        </div>
                        <span className={`text-xs ${mission.completed ? "text-white" : "text-[#A89F91]"}`}>
                          {mission.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#F3FF97] text-xs font-medium">{mission.reward}</span>
                        {mission.completed && (
                          <span className="material-symbols-outlined text-[#F3FF97] text-sm">check_circle</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <div className="text-white text-sm font-medium mb-2">Achievements</div>
                <div className="grid grid-cols-4 gap-1.5">
                  {achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-lg flex flex-col items-center justify-center gap-0.5 ${
                        achievement.unlocked
                          ? "bg-gradient-to-br from-[#875CFF]/20 to-[#D5A5E3]/10 border border-[#875CFF]/30"
                          : "bg-[#1a1a1a] border border-[#2a2a2a] opacity-50"
                      }`}
                    >
                      <span className={`material-symbols-outlined text-base ${
                        achievement.unlocked ? "text-[#875CFF]" : "text-[#666]"
                      }`}>
                        {achievement.icon}
                      </span>
                      <span className="text-[8px] text-[#A89F91] text-center px-0.5 leading-tight">
                        {achievement.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
