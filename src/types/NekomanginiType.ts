export interface SocialLink {
  platform: string;
  icon: string;
  url: string;
  label: string;
  svgPath: string;
}

export interface ActionLink {
  icon: string;
  label: string;
  url: string;
  svgPath: string;
}

export interface ProfileData {
  name: string;
  title: string;
  avatar: string;
}
