import ActivityPage from "../components/activities/ActivityPage";
import BudgetNewPage from "../components/budget/BudgetNewPage";
import BudgetPage from "../components/budget/BudgetPage";
import MainLayout from "../components/common/layout/main/MainLayout";
import Dashboard from "../components/dashboard";
// TODO: change to React.lazy
// ----------------------------------------------------------------------

const MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      {
        path: "budgets",
        children: [
          { path: "all", element: <BudgetPage /> },
          { path: "new", element: <BudgetNewPage /> },
          { path: "activities", element: <ActivityPage /> },
        ],
      },
      // { path: "budgets/new", element: <BudgetNewPage /> },
      // { path: "budgets/activities", element: <ActivityPage /> },
    ],
  },

  // {
  //   path: "*",

  //   element: <MainLayout />,
  // },
];

export default MainRoutes;
