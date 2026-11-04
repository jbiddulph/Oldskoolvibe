import { Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { AdvertPage } from "./pages/AdvertPage";
import { ArticlePage } from "./pages/ArticlePage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { HomePage } from "./pages/HomePage";
import { TrendCategoryPage } from "./pages/TrendCategoryPage";
import { TrendsPage } from "./pages/TrendsPage";
import { WhatWeBuildPage } from "./pages/WhatWeBuildPage";

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/what-we-build" element={<WhatWeBuildPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/trends" element={<TrendsPage />} />
        <Route path="/trends/:categorySlug" element={<TrendCategoryPage />} />
        <Route path="/services/:slug" element={<AdvertPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  );
}
