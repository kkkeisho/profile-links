import styles from "./page.module.css";

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
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.profile}>
          {/* 名前 */}
          <h1 className={styles.name}>あなたの名前</h1>

          {/* 自己紹介文 */}
          <p className={styles.bio}>
            ここに簡単な自己紹介文を記載してください。
            あなたの専門分野、興味のあること、何をしているかなどを
            簡潔に説明しましょう。
          </p>

          {/* SNSリンク */}
          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <span className={styles.socialIcon}>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* 今日の一言 */}
          <div className={styles.quote}>
            <p className={styles.quoteLabel}>今日の一言</p>
            <p className={styles.quoteText}>{todayQuote}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
