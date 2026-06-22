import { createBrowserRouter } from "react-router";

import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
// import { SearchPage } from "@/heroes/pages/search/SearchPage";
import { lazy } from "react";

// This is without the export default inside the component
// const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage").then(module => ({ default: module.SearchPage })));

const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));


// Without lazy load, all of the routes will load into memory at the
// same time
export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        // We don't use the initial / because it is taken from the father
        path: 'heroes/1',
        element: <HeroPage />
      },
      {
        path: 'search',
        element: <SearchPage />
      },
    ]
  },

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />
      }
    ]
  }
]);