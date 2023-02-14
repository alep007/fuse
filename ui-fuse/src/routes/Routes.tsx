import { useRoutes } from "react-router-dom";
import ActivityPage from "../components/activities/ActivityPage";
import BudgetNewPage from "../components/budget/BudgetNewPage";
import BudgetPage from "../components/budget/BudgetPage";
import DashboardLayout from "../components/common/DashboardLayout";
// import Dashboard from "../components/dashboard/Dashboard";
// import PetsPage from "../components/pets/PetsPage";

// ----------------------------------------------------------------------

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "budgets", element: <BudgetPage /> },
        { path: "budgets/new", element: <BudgetNewPage /> },
        { path: "budgets/activities", element: <ActivityPage /> },
        // { path: "app", element: <Dashboard /> },
        // { path: "pets", element: <PetsPage /> },
        // { path: "products", element: <ProductsPage /> },
        // { path: "blog", element: <BlogPage /> },
      ],
    },

    // {
    //   path: "user",
    //   // element: <BudgetPage />,
    // },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: "404", element: <Page404 /> },
    //     { path: "*", element: <Navigate to="/404" /> },
    //   ],
    {
      path: "*",

      element: <DashboardLayout />,
    },
  ]);

  return routes;
}
