import { kebabCase } from "@/utils/utils";

const projects = [
  {
    id: 0,
    title: "Wasalt",
    desc: "Find properties For Sale and Rent, The Platform offering reliable real estate brokerage services.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/wasalt.jpg`,
    link: "https://wasalt.com/",
    tags: ["React", "NextJS", "CSS", "Context", "Socket.io"]
  },
  {
    id: 1,
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
    id: 2,
    title: "Equitidex",
    desc: "Buy & Sell Digital Assets in minutes",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/equitidex.jpg`,
    link: "https://www.equitidex.com/",
    tags: ["React", "CSS", "Javascript", "Redux", "Groomet", "Bulma"]
  },
  {
    id: 3,
    title: "Macwin Solar Energy",
    desc: "Macwin Solar PV Module is the flagship company of Unique Sun Power LLP, which supplies solar panels used for green energy generation",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/macwin.jpg`,
    link: "https://macwinsolarenergy.com/",
    tags: ["React", "TailwindCSS", "Javascript"]
  },
  {
    id: 4,
    title: "NewNex",
    desc: "Newnex is the end-to-end platform for fundraising and investing in startups, co-investments and venture capital funds for GPs and LPs.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/newnex.jpg`,
    link: "https://www.newnex.io/",
    tags: ["React", "NextJs", "Javascript"]
  },
  {
    id: 5,
    title: "AI Olympiad",
    desc: "Students can take online quizzes to test their knowledge. Teachers can assign tests and assignments to students and the admin can manage both students and teachers.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/aiolymp.jpg`,
    tags: ["React", "Javascript", "Redux", "HTML"]
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
    title: "Covid-19-Global-Dashboard",
    desc: "COVID-19 Global | India - Get Real-time coronavirus updates for India and global. Analytics of all the affected countries with the number of confirmed, recovered, deaths, and active cases.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/covid19.jpg`,
    link: "https://miteshtagadiya.github.io/Covid-19-Global-Dashboard/#/",
    github: "https://github.com/miteshtagadiya/Covid-19-Global-Dashboard",
    tags: ["React", "Javascript", "React Google Charts", "Node", "ReCharts"]
  },
  {
    id: 9,
    title: "Restaurant App",
    desc: "The restaurant CRUD app is a sample project with CRUD operations built with ant-design, bootstrap4, and ReactJs.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/restaurant.jpg`,
    link: "https://miteshtagadiya.github.io/restaurant-app/",
    github: "https://github.com/miteshtagadiya/restaurant-app",
    tags: ["React", "Javascript", "Bootstrap"]
  },
  {
    id: 10,
    title: "Would You Rather",
    desc: "Project is a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/wouldyou.jpg`,
    link: "https://miteshtagadiya.github.io/would-you-rather/",
    github: "https://github.com/miteshtagadiya/would-you-rather",
    tags: ["React", "Javascript"]
  },
  {
    id: 11,
    title: "Favourite Location Tracker",
    desc: "Project is a web app that lets a user make a list of favorite locations. Users can add a favorite location to the list by selecting a location from the map and adding the details of that location.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/favoritelocation.jpg`,
    github: "https://github.com/miteshtagadiya/favorite-location-tracker",
    tags: ["React", "Javascript", "Map"]
  },
  {
    id: 12,
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
