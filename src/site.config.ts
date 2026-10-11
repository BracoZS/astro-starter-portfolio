// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Daniel Mallia',
  role: 'Doer of things',
  email: 'danielmallia@djmau.org',
  tagline: 'What are you doing here?',
  description:
    'Blog of Daniel Mallia — a technology generalist with an interest in geopolitics, philosophy, human interaction and music.',
  status:
    'Currently working in government, focussed on process improvement, digital capability development and learning new skills',
  social: [
    { label: 'GitHub', href: 'https://github.com/djm-homelab' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-mallia' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Photography', href: '/gallery'}
] as const;
