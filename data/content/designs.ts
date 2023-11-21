type Design = {
  label: string,
  img: string,
  link: string
}

export const designs: Design[] = [
  {
    label: "Mobile Shopping App",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/designs/mobile-shopping-app.jpg`,
    link: "https://dribbble.com/shots/9458498-Mobile-Shopping-App",
  },
  {
    label: "Modern App Design",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/designs/modern-app-design.png`,
    link: "https://dribbble.com/shots/15485626-Modern-App-Design",
  },
  {
    label: "Landing Pages for Startups - Concept",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/designs/startup-landing-pages.png`,
    link: "https://dribbble.com/shots/15485635-Landing-Pages-for-Startups-Concept",
  },
  {
    label: "Luxury, Blue Portfolio",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/designs/luxury-blue-portfolio.png`,
    link: "https://dribbble.com/shots/15165547-Luxury-Blue-Portfolio",
  },
  {
    label: "Mobile Deal Page",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/designs/mobile-deal-page.jpg`,
    link: "https://dribbble.com/shots/9462248-Mobile-Deal-Page",
  },
  {
    label: "Neon Signatures",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/designs/neon-signatures.jpeg`,
    link: "https://dribbble.com/shots/11134809-Neon-Signatures",
  },
  {
    label: "The Dentista - Logo Design",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/designs/the-dentista-logo.png`,
    link: "https://dribbble.com/shots/14571857-The-Dentista-Logo-Design",
  },
  {
    label: "iPhone Wallpapers",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/designs/iphone-wallpapers.png`,
    link: "https://dribbble.com/shots/14077089-Free-iPhone-Wallpapers",
  },
];
