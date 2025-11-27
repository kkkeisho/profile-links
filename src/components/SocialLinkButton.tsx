import { SocialLink } from "@/types";

type SocialLinkButtonProps = {
  link: SocialLink;
  variant?: "large" | "small";
};

export function SocialLinkButton({ link, variant = "large" }: SocialLinkButtonProps) {
  if (variant === "small") {
    return (
      <a
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
    );
  }

  return (
    <a
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
  );
}

