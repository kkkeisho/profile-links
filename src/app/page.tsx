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

  // SNSリンクの設定
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://youtube.com/@yourchannel",
      icon: "▶",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/yourusername",
      icon: "𝕏",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: "📷",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 sm:p-12 md:p-16">
        <div className="flex flex-col gap-8">
          {/* 名前 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            あなたの名前
          </h1>

          {/* 自己紹介文 */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            ここに簡単な自己紹介文を記載してください。
            あなたの専門分野、興味のあること、何をしているかなどを
            簡潔に説明しましょう。
          </p>

          {/* SNSリンク */}
          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-gray-200 bg-transparent text-gray-900 font-medium text-base transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm"
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* 今日の一言 */}
          <div className="bg-gray-50 border-l-4 border-gray-300 rounded-lg p-6 mt-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
              今日の一言
            </p>
            <p className="text-base text-gray-900 italic leading-relaxed">
              {todayQuote}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
