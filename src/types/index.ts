export type SocialLink = {
  name: string;
  url: string;
  icon: string;
  gradientClass: string;
};

export type ProfileConfig = {
  name: string;
  bio: string;
  socialLinks: SocialLink[];
};

