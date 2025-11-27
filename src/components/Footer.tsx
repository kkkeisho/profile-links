import { SocialLink } from "@/types";
import { CONTENT_WIDTH } from "@/config";
import { SocialLinkButton } from "./SocialLinkButton";

type FooterProps = {
  socialLinks: SocialLink[];
};

export function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className={`relative ${CONTENT_WIDTH} mt-8 backdrop-blur-xl bg-white/50 rounded-2xl shadow-lg border border-white/20 p-6 sm:p-8`}>
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
            <SocialLinkButton key={link.name} link={link} variant="small" />
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
  );
}

