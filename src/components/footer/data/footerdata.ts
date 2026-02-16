export const footerSections: FooterSection[] = [
  {
    title: "The Basics",
    items: [
      { label: "About TMDB", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "API Documentation", href: "#" },
      { label: "API for Business", href: "#" },
      { label: "System Status", href: "#" },
    ],
  },
  {
    title: "Get Involved",
    items: [
      { label: "Contribution Bible", href: "#" },
      { label: "Add New Movie", href: "#" },
      { label: "Add New TV Show", href: "#" },
    ],
  },
  {
    title: "Community",
    items: [
      { label: "Guidelines", href: "#" },
      { label: "Discussions", href: "#" },
      { label: "Leaderboard", href: "#" },
      { label: "Support Forums", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Terms of Use", href: "#" },
      { label: "API Terms of Use", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "DMCA Policy", href: "#" },
    ],
  },
];

export interface FooterItem {
  label: string;
  href: string;
}
export interface FooterSection {
  title: string;
  items: FooterItem[];
}
