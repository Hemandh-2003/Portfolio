import securetrade from "../assets/images/securetrade.png";
import tripgen from "../assets/images/tripgen.png";
import securetradeVideo from "../assets/videos/SecureTrade.mp4";
import tripgenVideo from "../assets/videos/TripGen-ai.mp4";

export const projects = [
  {
    id: 1,
    featured: true,

    title: "SecureTrade",

    category: "AI-Powered Marketplace",

    tagline:
      "Helping buyers avoid scams through AI-powered listing verification.",

    overview:
      "SecureTrade is a modern marketplace that analyzes listings using AI to identify suspicious products before users purchase them.",

    problem:
      "Online marketplaces often contain fake listings, duplicate images, misleading prices, and fraudulent sellers.",

    solution:
      "Built an AI-powered verification workflow that detects duplicate images, suspicious pricing, stock photos, and provides trust indicators for buyers.",

    image: securetrade,

    video: securetradeVideo,

    featured: true,

    features: [
      "AI Image Verification",
      "Duplicate Image Detection",
      "Suspicious Price Detection",
      "Admin Dashboard",
      "Cloudinary Image Upload",
      "JWT Authentication",
      "Role-Based Access",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Gemini AI",
    ],

    github: "https://github.com/Hemandh-2003/SecureTrade",
    demo: "",
  },

  {
    id: 2,

    featured: false,

    title: "TripGen AI",

    category: "AI Travel Planner",

    tagline:
      "Generate intelligent travel itineraries using AI.",

    overview:
      "TripGen AI creates personalized travel plans based on destination, budget and interests.",

    problem:
      "Planning trips manually takes time and requires gathering information from multiple sources.",

    solution:
      "An AI-powered travel planner that generates itineraries, recommendations and trip suggestions instantly.",

    image: tripgen,

    video: tripgenVideo,

    featured: true,

    features: [
      "AI Trip Generation",
      "Destination Suggestions",
      "Budget Planning",
      "Responsive Design",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini AI",
    ],

    github: "https://tripgenai.ddns.net/",
    demo: "https://tripgenai.ddns.net/",
  },
];