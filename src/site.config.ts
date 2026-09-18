// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'John Doe',
  role: 'Product design & frontend engineering',
  email: 'johndoe@example.com',
  tagline: 'I design and build interfaces that hold up under real use.',
  description:
    'Portfolio of John Doe — product design and frontend engineering, with an emphasis on speed, clarity, and the details most people skip.',
  status: 'Currently building at Studio Co · open to new work, Q3 2026',
  social: [
    { label: 'GitHub', href: 'https://github.com/your-username' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-username' },
    { label: 'X', href: 'https://x.com/your-username' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
] as const;
