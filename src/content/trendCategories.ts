export type TrendCategoryId = "frontend" | "backend" | "ui-ux";

export type TrendCategory = {
  id: TrendCategoryId;
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  metaDescription: string;
  accent: string;
  topics: string[];
};

export const trendCategories: TrendCategory[] = [
  {
    id: "frontend",
    slug: "frontend",
    title: "Frontend development trends",
    eyebrow: "Frontend trends",
    headline: "Latest frontend development trends for modern business websites.",
    description:
      "Explore current frontend trends across React, Next, Vue, Nuxt, performance, design systems, and AI-assisted UI delivery.",
    metaDescription:
      "Latest frontend development trends from OldSkoolVibe.dev: React, Next.js, Vue, Nuxt, server components, performance, design systems, and AI-assisted frontend delivery.",
    accent: "cyan",
    topics: [
      "React & Next.js",
      "Vue & Nuxt",
      "Server components",
      "Core Web Vitals",
      "Design systems",
      "AI-assisted UI",
    ],
  },
  {
    id: "backend",
    slug: "backend",
    title: "Backend development trends",
    eyebrow: "Backend trends",
    headline: "Latest backend development trends for APIs, data, and business systems.",
    description:
      "Stay current on backend trends across Laravel, Python, APIs, PostgreSQL, auth, queues, and agent-ready architectures.",
    metaDescription:
      "Latest backend development trends from OldSkoolVibe.dev: Laravel, Python, FastAPI, PostgreSQL, API design, auth, queues, and scalable website backends.",
    accent: "red",
    topics: [
      "Laravel & PHP",
      "Python APIs",
      "PostgreSQL",
      "Auth & security",
      "Queues & jobs",
      "Integration platforms",
    ],
  },
  {
    id: "ui-ux",
    slug: "ui-ux",
    title: "UI/UX design trends",
    eyebrow: "UI/UX trends",
    headline: "Latest UI/UX trends that help websites convert and feel trustworthy.",
    description:
      "Practical UI/UX trend pages covering conversion design, accessibility, motion, content UX, and product interface patterns.",
    metaDescription:
      "Latest UI/UX trends from OldSkoolVibe.dev: conversion-focused design, accessibility, motion, content UX, dashboards, and modern website interface patterns.",
    accent: "green",
    topics: [
      "Conversion UX",
      "Accessibility",
      "Motion & presence",
      "Content design",
      "Dashboards",
      "Mobile-first UX",
    ],
  },
];

export const getTrendCategoryBySlug = (slug: string | undefined) =>
  trendCategories.find((category) => category.slug === slug);
