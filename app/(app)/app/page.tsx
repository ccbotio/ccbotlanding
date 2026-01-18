"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ==================== TYPES ====================
type Screen = "home" | "wallet" | "send" | "receive" | "swap" | "history" | "rewards" | "settings";

interface NavigationState {
  screen: Screen;
  params?: any;
  fromTab?: boolean;
}

// ==================== TAB BAR ====================
const tabs = [
  { id: "home", icon: "home", label: "Home" },
  { id: "wallet", icon: "account_balance_wallet", label: "Wallet" },
  { id: "swap", icon: "swap_horiz", label: "Swap" },
  { id: "rewards", icon: "stars", label: "Rewards" },
  { id: "settings", icon: "settings", label: "Settings" },
];

function TabBar({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto">
      <div className="absolute inset-0 bg-[#030206]/90 backdrop-blur-xl border-t border-[#1f1f1f]" />
      <div className="relative flex items-center justify-around px-2 py-2">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex flex-col items-center gap-1 py-2 px-4 rounded-xl relative"
            whileTap={{ scale: 0.95 }}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-br from-[#875CFF]/20 to-[#D5A5E3]/10 rounded-xl border border-[#875CFF]/30"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className={`material-symbols-outlined text-2xl relative z-10 transition-colors duration-200 ${activeTab === tab.id ? "text-[#F3FF97]" : "text-[#A89F91]"}`}>
              {tab.icon}
            </span>
            <span className={`text-[10px] font-medium relative z-10 transition-colors duration-200 ${activeTab === tab.id ? "text-white" : "text-[#A89F91]"}`}>
              {tab.label}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ==================== HEADER ====================
function Header({ title, showBack = false, showProfile = true, onBack }: {
  title?: string;
  showBack?: boolean;
  showProfile?: boolean;
  onBack?: () => void;
}) {
  return (
    <div className="sticky top-0 z-40">
      <div className="absolute inset-0 bg-[#030206]/80 backdrop-blur-xl" />
      <div className="relative flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {showBack ? (
            <motion.button onClick={onBack} whileTap={{ scale: 0.95 }} className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
              <span className="material-symbols-outlined text-white">arrow_back</span>
            </motion.button>
          ) : showProfile ? (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#875CFF] to-[#D5A5E3] flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-lg">person</span>
              </div>
              <div>
                <div className="text-white text-sm font-medium">Welcome back</div>
                <div className="text-[#A89F91] text-xs">@cryptouser</div>
              </div>
            </div>
          ) : null}
          {title && !showProfile && <h1 className="text-white text-lg font-semibold">{title}</h1>}
        </div>
        <motion.button whileTap={{ scale: 0.95 }} className="relative w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
          <span className="material-symbols-outlined text-[#A89F91]">notifications</span>
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#F3FF97] flex items-center justify-center">
            <span className="text-[#030206] text-[9px] font-bold">3</span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}

// ==================== DASHBOARD ====================
const quickActions = [
  { icon: "arrow_upward", label: "Send", screen: "send" },
  { icon: "arrow_downward", label: "Receive", screen: "receive" },
  { icon: "swap_horiz", label: "Swap", screen: "swap" },
  { icon: "history", label: "History", screen: "history" },
];

const recentTransactions = [
  { type: "send", token: "CC", amount: "-150", usd: "$98.50", to: "@john_doe", time: "2 min ago" },
  { type: "receive", token: "USDT", amount: "+500", usd: "$500.00", from: "@alice", time: "1 hour ago" },
  { type: "swap", token: "CC → USDT", amount: "200 → 131", usd: "$131.40", time: "3 hours ago" },
];

function Dashboard({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030206] via-[#0a0a0f] to-[#0d0d12] pb-24">
      <Header />
      <div className="px-4 pt-4 space-y-6">
        {/* Balance Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden">
          <div className="bg-gradient-to-br from-[#875CFF] to-[#D5A5E3] rounded-3xl p-6">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/80 text-sm">Total Balance</span>
                <motion.button whileTap={{ scale: 0.95 }} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-sm">visibility</span>
                </motion.button>
              </div>
              <div className="mb-4">
                <span className="text-white text-4xl font-bold">$12,458.32</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 text-[#030206] text-sm bg-[#F3FF97] px-3 py-1.5 rounded-full font-medium">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  +5.24%
                </span>
                <span className="text-white/70 text-sm">Today</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-4 gap-3">
          {quickActions.map((action) => (
            <motion.button
              key={action.screen}
              onClick={() => onNavigate(action.screen)}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#875CFF]/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#875CFF]/20 to-[#D5A5E3]/10 border border-[#875CFF]/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#875CFF] text-xl">{action.icon}</span>
              </div>
              <span className="text-[#A89F91] text-xs">{action.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Rewards Banner */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => onNavigate("rewards")}
          whileTap={{ scale: 0.98 }}
          className="w-full relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] p-4"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#F3FF97]/5 to-transparent" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F3FF97]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#F3FF97]">stars</span>
              </div>
              <div className="text-left">
                <div className="text-white text-sm font-medium">1,284 CC Points</div>
                <div className="text-[#A89F91] text-xs">7 day streak active</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#875CFF] text-xs">View rewards</span>
              <span className="material-symbols-outlined text-[#875CFF] text-sm">chevron_right</span>
            </div>
          </div>
        </motion.button>

        {/* Recent Transactions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">Recent Activity</h2>
            <button onClick={() => onNavigate("history")} className="text-[#875CFF] text-sm flex items-center gap-1">
              See all
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
          <div className="space-y-3">
            {recentTransactions.map((tx, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a]"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.type === "send" ? "bg-red-500/10" : tx.type === "receive" ? "bg-green-500/10" : "bg-[#875CFF]/10"}`}>
                    <span className={`material-symbols-outlined text-lg ${tx.type === "send" ? "text-red-400" : tx.type === "receive" ? "text-green-400" : "text-[#875CFF]"}`}>
                      {tx.type === "send" ? "arrow_upward" : tx.type === "receive" ? "arrow_downward" : "swap_horiz"}
                    </span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{tx.token}</div>
                    <div className="text-[#A89F91] text-xs">{tx.to ? `To ${tx.to}` : tx.from ? `From ${tx.from}` : tx.time}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${tx.type === "send" ? "text-red-400" : tx.type === "receive" ? "text-green-400" : "text-white"}`}>{tx.amount}</div>
                  <div className="text-[#A89F91] text-xs">{tx.usd}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== WALLET ====================
const tokens = [
  { symbol: "CC", name: "Canton Coin", amount: "1,250.00", usd: "$8,234.12", change: "+5.2%", positive: true },
  { symbol: "USDCx", name: "USD Coin", amount: "4,224.20", usd: "$4,224.20", change: "+0.1%", positive: true },
  { symbol: "USDT", name: "Tether", amount: "500.00", usd: "$500.00", change: "+0.0%", positive: true },
  { symbol: "ETH", name: "Ethereum", amount: "0.125", usd: "$312.50", change: "-2.1%", positive: false },
];

function Wallet({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030206] via-[#0a0a0f] to-[#0d0d12] pb-24">
      <Header title="Wallet" showProfile={false} />
      <div className="px-4 pt-4 space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-6">
          <div className="text-[#A89F91] text-sm mb-2">Portfolio Value</div>
          <div className="text-white text-4xl font-bold mb-2">$13,457.94</div>
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1 text-green-400 text-sm">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              +$623.45 (4.85%)
            </span>
          </div>
        </motion.div>

        <div className="flex gap-3">
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => onNavigate("send")} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F3FF97] text-[#030206] font-semibold">
            <span className="material-symbols-outlined text-lg">arrow_upward</span>Send
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => onNavigate("receive")} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white font-semibold">
            <span className="material-symbols-outlined text-lg">arrow_downward</span>Receive
          </motion.button>
        </div>

        <div className="space-y-3">
          {tokens.map((token, i) => (
            <motion.div key={token.symbol} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }} className="flex items-center justify-between p-4 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#875CFF]/30 to-[#D5A5E3]/20 flex items-center justify-center">
                  <span className="text-[#F3FF97] text-lg font-bold">{token.symbol[0]}</span>
                </div>
                <div>
                  <div className="text-white font-medium">{token.symbol}</div>
                  <div className="text-[#A89F91] text-sm">{token.name}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-medium">{token.amount}</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#A89F91] text-sm">{token.usd}</span>
                  <span className={`text-xs ${token.positive ? "text-green-400" : "text-red-400"}`}>{token.change}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== SWAP ====================
function Swap() {
  const [fromAmount, setFromAmount] = useState("");
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030206] via-[#0a0a0f] to-[#0d0d12] pb-24">
      <Header title="Swap" showProfile={false} />
      <div className="px-4 pt-6 space-y-4">
        {/* From */}
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#A89F91] text-sm">From</span>
            <span className="text-[#A89F91] text-sm">Balance: 1,250.00</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0d0d0d] border border-[#2a2a2a]">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#875CFF]/30 to-[#D5A5E3]/20 flex items-center justify-center">
                <span className="text-[#F3FF97] font-bold text-sm">C</span>
              </div>
              <span className="text-white font-medium">CC</span>
              <span className="material-symbols-outlined text-[#A89F91] text-sm">expand_more</span>
            </div>
            <input
              type="text"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value.replace(/[^0-9.]/g, ""))}
              placeholder="0.00"
              className="flex-1 bg-transparent text-white text-2xl font-bold text-right focus:outline-none"
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-2 relative z-10">
          <motion.button whileTap={{ scale: 0.9, rotate: 180 }} className="w-12 h-12 rounded-full bg-gradient-to-br from-[#875CFF] to-[#D5A5E3] flex items-center justify-center shadow-lg" style={{ boxShadow: "0 0 20px rgba(135, 92, 255, 0.4)" }}>
            <span className="material-symbols-outlined text-white">swap_vert</span>
          </motion.button>
        </div>

        {/* To */}
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#A89F91] text-sm">To</span>
            <span className="text-[#A89F91] text-sm">Balance: 500.00</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0d0d0d] border border-[#2a2a2a]">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#875CFF]/30 to-[#D5A5E3]/20 flex items-center justify-center">
                <span className="text-[#F3FF97] font-bold text-sm">U</span>
              </div>
              <span className="text-white font-medium">USDT</span>
              <span className="material-symbols-outlined text-[#A89F91] text-sm">expand_more</span>
            </div>
            <div className="flex-1 text-right">
              <span className="text-white text-2xl font-bold">{fromAmount ? (parseFloat(fromAmount) * 6.58).toFixed(2) : "0.00"}</span>
            </div>
          </div>
        </div>

        <motion.button whileTap={{ scale: 0.98 }} disabled={!fromAmount} className={`w-full py-4 rounded-xl font-semibold ${fromAmount ? "bg-[#F3FF97] text-[#030206]" : "bg-[#1a1a1a] text-[#A89F91]"}`}>
          {fromAmount ? "Swap" : "Enter amount"}
        </motion.button>
      </div>
    </div>
  );
}

// ==================== REWARDS ====================
const achievements = [
  { title: "Early Adopter", icon: "rocket_launch", unlocked: true, rarity: "Legendary" },
  { title: "Diamond Hands", icon: "diamond", unlocked: true, rarity: "Epic" },
  { title: "Social Butterfly", icon: "groups", unlocked: false, rarity: "Rare" },
  { title: "Whale", icon: "waves", unlocked: false, rarity: "Legendary" },
  { title: "Trader Pro", icon: "monitoring", unlocked: false, rarity: "Epic" },
  { title: "First Steps", icon: "footprint", unlocked: true, rarity: "Common" },
];

function Rewards() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030206] via-[#0a0a0f] to-[#0d0d12] pb-24">
      <Header title="Rewards" showProfile={false} />
      <div className="px-4 pt-4 space-y-6">
        {/* Points Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl p-6">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F3FF97]/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[#A89F91] text-sm mb-1">Your CC Points</div>
                <div className="text-white text-4xl font-bold">1,284</div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3FF97]/10 border border-[#F3FF97]/20">
                <span className="material-symbols-outlined text-[#F3FF97]">local_fire_department</span>
                <span className="text-[#F3FF97] font-medium">7 Day Streak</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#A89F91]">Weekly Progress</span>
                <span className="text-[#875CFF]">Level 3</span>
              </div>
              <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "71%" }} transition={{ duration: 1 }} className="h-full bg-gradient-to-r from-[#875CFF] to-[#D5A5E3] rounded-full" />
              </div>
            </div>
            <div className="flex gap-1">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                <div key={i} className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-lg ${i < 5 ? "bg-[#875CFF]/20" : "bg-[#2a2a2a]"}`}>
                  <span className="text-[#A89F91] text-[10px]">{day}</span>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${i < 5 ? "bg-[#F3FF97]" : "bg-[#3a3a3a]"}`}>
                    {i < 5 && <span className="material-symbols-outlined text-[#030206] text-sm">check</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-3 gap-3">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className={`aspect-square rounded-2xl p-3 flex flex-col items-center justify-center text-center ${achievement.unlocked ? "bg-gradient-to-br from-[#875CFF]/20 to-[#D5A5E3]/10 border border-[#875CFF]/30" : "bg-[#1a1a1a] border border-[#2a2a2a] opacity-60"}`}
            >
              <span className={`material-symbols-outlined text-3xl mb-2 ${achievement.unlocked ? "text-[#F3FF97]" : "text-[#A89F91]"}`}>{achievement.icon}</span>
              <div className={`text-xs font-medium mb-1 ${achievement.unlocked ? "text-white" : "text-[#A89F91]"}`}>{achievement.title}</div>
              <div className={`text-[10px] ${achievement.rarity === "Legendary" ? "text-[#F3FF97]" : achievement.rarity === "Epic" ? "text-[#875CFF]" : achievement.rarity === "Rare" ? "text-[#D5A5E3]" : "text-[#A89F91]"}`}>{achievement.rarity}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== SETTINGS ====================
const settingsItems = [
  { icon: "person", label: "Profile", description: "@cryptouser" },
  { icon: "fingerprint", label: "Biometric Login", description: "Enabled" },
  { icon: "lock", label: "PIN Code", description: "Change PIN" },
  { icon: "key", label: "Backup Phrase", description: "View recovery" },
  { icon: "notifications", label: "Notifications", description: "Enabled" },
  { icon: "help", label: "Help Center", description: "FAQs & guides" },
];

function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030206] via-[#0a0a0f] to-[#0d0d12] pb-24">
      <Header title="Settings" showProfile={false} />
      <div className="px-4 pt-4 space-y-4">
        {/* Profile Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#875CFF] to-[#D5A5E3] flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-3xl">person</span>
            </div>
            <div className="flex-1">
              <div className="text-white text-lg font-semibold">Crypto User</div>
              <div className="text-[#A89F91] text-sm">@cryptouser</div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-green-400 text-xs">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Settings Items */}
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden">
          {settingsItems.map((item, i) => (
            <motion.button key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.05 }} className={`w-full flex items-center justify-between p-4 ${i < settingsItems.length - 1 ? "border-b border-[#2a2a2a]" : ""}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2a2a2a] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#875CFF]">{item.icon}</span>
                </div>
                <div className="text-left">
                  <div className="text-white">{item.label}</div>
                  <div className="text-[#A89F91] text-sm">{item.description}</div>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#A89F91]">chevron_right</span>
            </motion.button>
          ))}
        </div>

        <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
          <span className="material-symbols-outlined">logout</span>
          Disconnect Wallet
        </motion.button>

        <div className="text-center text-[#A89F91] text-sm pb-4">CC Bot Wallet v2.0.0</div>
      </div>
    </div>
  );
}

// ==================== PLACEHOLDER SCREENS ====================
function PlaceholderScreen({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030206] via-[#0a0a0f] to-[#0d0d12]">
      <Header title={title} showBack showProfile={false} onBack={onBack} />
      <div className="flex items-center justify-center h-[60vh]">
        <div className="text-center">
          <span className="material-symbols-outlined text-[#875CFF] text-6xl mb-4">construction</span>
          <div className="text-white text-xl font-semibold">{title}</div>
          <div className="text-[#A89F91]">Coming soon</div>
        </div>
      </div>
    </div>
  );
}

// ==================== MAIN APP ====================
export default function TelegramApp() {
  const [navigation, setNavigation] = useState<NavigationState>({ screen: "home", fromTab: true });
  const [history, setHistory] = useState<NavigationState[]>([{ screen: "home", fromTab: true }]);

  const navigate = useCallback((screen: string) => {
    const newState = { screen: screen as Screen, fromTab: false };
    setNavigation(newState);
    setHistory((prev) => [...prev, newState]);
  }, []);

  const goBack = useCallback(() => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setNavigation(newHistory[newHistory.length - 1]);
    }
  }, [history]);

  const handleTabChange = useCallback((tab: string) => {
    const newState = { screen: tab as Screen, fromTab: true };
    setNavigation(newState);
    setHistory([newState]);
  }, []);

  const showTabBar = ["home", "wallet", "swap", "rewards", "settings"].includes(navigation.screen);
  const activeTab = navigation.fromTab ? navigation.screen : navigation.screen === "send" || navigation.screen === "receive" ? "wallet" : navigation.screen === "history" ? "home" : navigation.screen;

  const renderScreen = () => {
    switch (navigation.screen) {
      case "home": return <Dashboard onNavigate={navigate} />;
      case "wallet": return <Wallet onNavigate={navigate} />;
      case "swap": return <Swap />;
      case "rewards": return <Rewards />;
      case "settings": return <Settings />;
      case "send": return <PlaceholderScreen title="Send" onBack={goBack} />;
      case "receive": return <PlaceholderScreen title="Receive" onBack={goBack} />;
      case "history": return <PlaceholderScreen title="History" onBack={goBack} />;
      default: return <Dashboard onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030206] flex justify-center">
      <div className="w-full max-w-md relative">
        {/* Phone Frame */}
        <div className="min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={navigation.screen}
              initial={{ opacity: 0, x: navigation.fromTab ? 0 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: navigation.fromTab ? 0 : -20 }}
              transition={{ duration: 0.2 }}
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
          {showTabBar && <TabBar activeTab={activeTab} onTabChange={handleTabChange} />}
        </div>
      </div>
    </div>
  );
}
