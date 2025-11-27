export default function Home() {
  // 今日の一言の配列（実際の使用時は、APIやデータベースから取得することも可能）
  const dailyQuotes = [
    "今日も一日頑張りましょう！",
    "小さな一歩が大きな変化につながります。",
    "新しいことに挑戦する勇気を持ちましょう。",
    "毎日が新しい始まりです。",
    "自分を信じて進みましょう。",
  ];

  // 今日の日付に基づいて「今日の一言」を選択（シンプルな実装）
  const todayIndex = new Date().getDate() % dailyQuotes.length;
  const todayQuote = dailyQuotes[todayIndex];

  // SNSリンクの設定（各プラットフォームに色を設定）
  const socialLinks = [
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

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      {/* アニメーション背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative w-[80%] max-w-6xl backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 md:p-16 transform transition-all duration-300 hover:shadow-3xl">
        <div className="flex flex-col gap-10">
          {/* 名前 - グラデーションテキスト */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight tracking-tight">
              あなたの名前
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
          </div>

          {/* 自己紹介文 */}
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
            ここに簡単な自己紹介文を記載してください。
            <br className="hidden sm:block" />
            あなたの専門分野、興味のあること、何をしているかなどを
            <br className="hidden sm:block" />
            簡潔に説明しましょう。
          </p>

          {/* SNSリンク */}
          <div className="flex flex-col gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center gap-4 px-6 py-4 rounded-2xl ${link.gradientClass} text-white font-semibold text-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
              >
                <span className="relative z-10 text-2xl transform group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </span>
                <span className="relative z-10 flex-1">{link.name}</span>
                <span className="relative z-10 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* 今日の一言 - 特別なデザイン */}
          <div className="relative mt-4">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-200/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full animate-pulse"></div>
                <p className="text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                  今日の一言
                </p>
              </div>
              <div className="overflow-hidden relative">
                <div className="flex animate-scroll-text">
                  <p className="text-xl sm:text-xl text-gray-800 leading-relaxed font-medium italic whitespace-nowrap px-4">
                    "{todayQuote}"
                  </p>
                  <p className="text-xl sm:text-xl text-gray-800 leading-relaxed font-medium italic whitespace-nowrap px-4">
                    "{todayQuote}"
                  </p>
                  <p className="text-xl sm:text-xl text-gray-800 leading-relaxed font-medium italic whitespace-nowrap px-4">
                    "{todayQuote}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="relative w-[80%] max-w-6xl mt-8 backdrop-blur-xl bg-white/50 rounded-2xl shadow-lg border border-white/20 p-6 sm:p-8">
        {/* 上部: コピーライト、ライン、ソーシャルアイコン */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          {/* 左側: コピーライト */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full animate-pulse"></div>
            <p className="text-sm text-gray-600 font-medium whitespace-nowrap">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* 中央: 装飾的なライン */}
          <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent mx-4 max-w-xs"></div>

          {/* 右側: ソーシャルアイコン（小さめ） */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-10 h-10 rounded-full ${link.gradientClass} flex items-center justify-center text-white text-sm transform transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                aria-label={link.name}
              >
                <span className="relative z-10 transform group-hover:scale-125 transition-transform duration-300">
                  {link.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* 下部: 追加情報 */}
        <div className="pt-4 border-t border-gray-200/50">
          <p className="text-xs text-center text-gray-500 font-light">
            Made with <span className="text-pink-500">♥</span> using Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
