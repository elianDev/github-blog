import { Routes, Route } from "react-router-dom";
import BlogPage from "./pages/Blog";
import DefaultLayout from "./layouts/DefaultLayout";
import PostPage from "./pages/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<BlogPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Route>
    </Routes>
  );
}
