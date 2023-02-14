const routeConstants = {
  DashBoard: "/dashboard",
  PleaseWait: "/pleaseWait",
  //   Login: "/systemUser/runs/:id",
  Login: "/login",
  Logout: "/logout",
  NewBudget: "/budgets/new",
};

const replaceRouteParam = (route: string, paramName: string, value: string): string => {
  const routeWithParam = route.replace(paramName, value);
  return routeWithParam;
};

const replaceIdRouteParam = (route: string, value: string): string => {
  return replaceRouteParam(route, ":id", value);
};

export { replaceRouteParam, replaceIdRouteParam };
export default routeConstants;
