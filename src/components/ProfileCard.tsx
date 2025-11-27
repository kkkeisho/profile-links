import { SocialLink } from "@/types";
import { CONTENT_WIDTH } from "@/config";
import { SocialLinkButton } from "./SocialLinkButton";
import { QuoteSection } from "./QuoteSection";

type ProfileCardProps = {
  name: string;
  bio: string;
  socialLinks: SocialLink[];
  dailyQuote: string;
};

export function ProfileCard({ name, bio, socialLinks, dailyQuote }: ProfileCardProps) {
  return (
    <main className={`relative ${CONTENT_WIDTH} backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 md:p-16 transform transition-all duration-300 hover:shadow-3xl`}>
      <div className="flex flex-col gap-10">
        {/* 名前 - グラデーションテキスト */}
        <div className="space-y-2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight tracking-tight">
            {name}
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
        </div>

        {/* 自己紹介文 */}
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light whitespace-pre-line">
          {bio}
        </p>

        {/* SNSリンク */}
        <div className="flex flex-col gap-4">
          {socialLinks.map((link) => (
            <SocialLinkButton key={link.name} link={link} variant="large" />
          ))}
        </div>

        {/* 今日の一言 */}
        <QuoteSection quote={dailyQuote} />
      </div>
    </main>
  );
}

