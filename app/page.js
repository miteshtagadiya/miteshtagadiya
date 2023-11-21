import Page from "@/components/utility/Page";
import Hero from "@/components/home/Hero";
import Main from "@/components/main";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "Experienced ReactJS developer adept in crafting dynamic web applications with Next.js and Tailwind CSS. Explore my portfolio for innovative projects and seamless user experiences."
      }}
    >
      <Hero />
      <Main />
      <CTA />
    </Page>
  );
}
