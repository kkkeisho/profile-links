import { SocialLink } from "@/types";

export const CONTENT_WIDTH = "w-[80%] max-w-6xl";

export const DAILY_QUOTES = [
  "今日も一日頑張りましょう！",
  "小さな一歩が大きな変化につながります。",
  "新しいことに挑戦する勇気を持ちましょう。",
  "毎日が新しい始まりです。",
  "自分を信じて進みましょう。",
] as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "YouTube",
    url: "https://youtube.com/@yourchannel",
    icon: "▶",
    gradientClass: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/yourusername",
    icon: "𝕏",
    gradientClass: "bg-gradient-to-r from-gray-500 to-white hover:from-black hover:to-gray-800",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: "📷",
    gradientClass: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600",
  },
];

export const PROFILE_CONFIG = {
  name: "あなたの名前",
  bio: `ここに簡単な自己紹介文を記載してください。
あなたの専門分野、興味のあること、何をしているかなどを
簡潔に説明しましょう。`,
} as const;

