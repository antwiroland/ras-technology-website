import digisellImg from "../assets/project-digisell.png";
import smsImg from "../assets/project-sms.png";
import gohandyImg from "../assets/project-gohandy.png";
import cmsImg from "../assets/project-cms.png";

import digisellMd from "../content/digisell.md?raw";
import smsMd from "../content/sms.md?raw";
import gohandyMd from "../content/gohandy.md?raw";
import cmsMd from "../content/cms.md?raw";

export const projects = [
  {
    slug: "digisell",
    title: "Ghana Multi-Tenant SaaS POS",
    label: "Retail SaaS",
    image: digisellImg,
    summary:
      "Offline-first POS with multi-tenant architecture, MoMo fraud controls, and branch-level inventory.",
    markdown: digisellMd,
    highlights: ["Offline-first JavaFX POS", "Role-based audit trails", "Multi-branch reporting"],
    stack: ["Spring Boot", "PostgreSQL", "JavaFX", "Next.js"],
  },
  {
    slug: "sms",
    title: "School Management System",
    label: "Education Platform",
    image: smsImg,
    summary:
      "Policy-driven academic platform enforcing class progression, promotions, fees, and auditability.",
    markdown: smsMd,
    highlights: ["Promotion rules engine", "Unified student record", "Role-limited actions"],
    stack: ["Java", "Spring Boot", "PostgreSQL", "Analytics"],
  },
  {
    slug: "gohandy",
    title: "GoHandy Artisan Marketplace",
    label: "On-demand Services",
    image: gohandyImg,
    summary:
      "Emergency marketplace connecting verified artisans to customers with trusted identity and ratings.",
    markdown: gohandyMd,
    highlights: ["Ghana Card verification", "Emergency order flow", "Wallet monetization"],
    stack: ["Mobile", "Realtime", "Location Services", "Admin Tools"],
  },
  {
    slug: "cms",
    title: "Retail Sales Rep Tracking",
    label: "Field Operations",
    image: cmsImg,
    summary:
      "Map-driven platform for route optimization, sales proofing, and real-time visibility.",
    markdown: cmsMd,
    highlights: ["GPS visit verification", "Route optimization", "Performance analytics"],
    stack: ["Maps", "Realtime Ops", "Reporting", "Permissions"],
  },
];
