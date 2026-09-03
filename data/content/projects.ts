import { kebabCase } from "@/utils/utils";

const projects = [
  {
    id: 0,
    title: "AI Eval Console",
    desc: "TypeScript + React + Next.js console for prompt regressions, eval pass rates, and LoRA training-run metrics with a typed /api/eval route.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/ai-eval-console.svg`,
    github: "https://github.com/miteshtagadiya/ai-eval-console",
    tags: ["TypeScript", "React", "Next.js", "LLM", "Evaluation", "JavaScript"]
  },
  {
    id: 1,
    title: "Prompt Regression Lab",
    desc: "Next.js prompt versioning lab: A/B prompt suites, offline regression runner, and a dashboard for pass rates.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/prompt-lab.svg`,
    github: "https://github.com/miteshtagadiya/prompt-regression-lab",
    tags: ["JavaScript", "React", "Next.js", "Prompt Engineering", "Evaluation", "LLM"]
  },
  {
    id: 2,
    title: "LoRA Instruction Tuner",
    desc: "LoRA/PEFT instruction fine-tune smoke pipeline with tiny dataset, train config, dry-run metrics, and offline eval scoring.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/lora-tuner.svg`,
    github: "https://github.com/miteshtagadiya/lora-instruction-tuner",
    tags: ["LLM", "LoRA", "PEFT", "Fine-tuning", "Python", "Eval"]
  },
  {
    id: 3,
    title: "LLM Eval Harness Lite",
    desc: "Offline LLM eval harness with fixed cases, pluggable scorers (exact/contains/JSON), and baseline pass-rate deltas.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/eval-harness.svg`,
    github: "https://github.com/miteshtagadiya/llm-eval-harness-lite",
    tags: ["LLM", "Evaluation", "Prompt Engineering", "Python"]
  },
  {
    id: 4,
    title: "RAG Eval Kit",
    desc: "Minimal RAG retrieve + generate stub with relevance, faithfulness, and answer-overlap metrics over a local corpus.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/rag-eval.svg`,
    github: "https://github.com/miteshtagadiya/rag-eval-kit",
    tags: ["RAG", "Evaluation", "LLM", "Python"]
  },
  {
    id: 5,
    title: "Wasalt",
    desc: "Find properties For Sale and Rent, The Platform offering reliable real estate brokerage services.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/wasalt.jpg`,
    link: "https://wasalt.com/",
    tags: ["React", "NextJS", "CSS", "Context", "Socket.io"]
  },
  {
    id: 6,
    title: "Etihaas",
    desc: "Healthcare near you, World's first Digital Healthcare Marketplace! If you own a healthcare establishment, you can claim your business for free",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/etihaas.jpg`,
    link: "https://www.etihaas.com/",
    tags: [
      "React",
      "NextJS",
      "Context",
      "HTML",
      "CSS",
      "Javascript",
      "AWS Cognito"
    ]
  },
  {
    id: 7,
    title: "Equitidex",
    desc: "Buy & Sell Digital Assets in minutes",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/equitidex.jpg`,
    link: "https://www.equitidex.com/",
    tags: ["React", "CSS", "Javascript", "Redux", "Groomet", "Bulma"]
  },
  {
    id: 8,
    title: "Macwin Solar Energy",
    desc: "Macwin Solar PV Module is the flagship company of Unique Sun Power LLP, which supplies solar panels used for green energy generation",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/macwin.jpg`,
    link: "https://macwinsolarenergy.com/",
    tags: ["React", "TailwindCSS", "Javascript"]
  },
  {
    id: 9,
    title: "NewNex",
    desc: "Newnex is the end-to-end platform for fundraising and investing in startups, co-investments and venture capital funds for GPs and LPs.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/newnex.jpg`,
    link: "https://www.newnex.io/",
    tags: ["React", "NextJs", "Javascript"]
  },
  {
    id: 10,
    title: "AI Olympiad",
    desc: "Students can take online quizzes to test their knowledge. Teachers can assign tests and assignments to students and the admin can manage both students and teachers.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/aiolymp.jpg`,
    tags: ["React", "Javascript", "Redux", "HTML"]
  },
  {
    id: 11,
    title: "Banking Platform",
    desc: "Banking Platform with multiple react apps for Landing app, Authentication app, Transaction app, Foundation app, and separate React apps for other banking operations in the Main app.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/banking.jpg`,
    tags: [
      "React",
      "Javascript",
      "Micro Frontend",
      "Shared Components",
      "Docker",
      "Material UI"
    ]
  },
  {
    id: 12,
    title: "Shoppr",
    desc: "Product is a Customer Science Platform that provides the often-missing holistic customer view to e-commerce sellers and empowers them to reach out to the right customers with the right product at right time.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/shoppr.jpg`,
    link: "shoppr.ai",
    tags: [
      "React",
      "Javascript",
      "Redux",
      "Ant-Design",
      "React Google Charts",
      "ReCharts"
    ]
  },
  {
    id: 13,
    title: "Covid-19-Global-Dashboard",
    desc: "COVID-19 Global | India - Get Real-time coronavirus updates for India and global. Analytics of all the affected countries with the number of confirmed, recovered, deaths, and active cases.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/covid19.jpg`,
    link: "https://miteshtagadiya.github.io/Covid-19-Global-Dashboard/#/",
    github: "https://github.com/miteshtagadiya/Covid-19-Global-Dashboard",
    tags: ["React", "Javascript", "React Google Charts", "Node", "ReCharts"]
  },
  {
    id: 14,
    title: "Embedded-react-widget",
    desc: "Embedded React Widget to deploy on your website.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/widget.jpg`,
    github: "https://github.com/miteshtagadiya/embedded-react-widget",
    tags: ["React", "Javascript"]
  }
];

export const allTags = [];

projects.forEach(project => {
  project.tags.forEach(tag => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map(tag => kebabCase(tag));

export default projects;
