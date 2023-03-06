import { Route } from "react-router-dom";
import { lazy } from "react";
const routes = [
  {
    path: "",
    element: lazy(() => import("./../pages/HomeTemplate")),
    nested: [
      {
        path: "",
        element: lazy(() => import("./../pages/HomeTemplate/HomePage")),
      },
      {
        path: "login",
        element: lazy(() => import("./../pages/HomeTemplate/UserLogin")),
      },
      {
        path: "register",
        element: lazy(() => import("./../pages/HomeTemplate/UserRegister")),
      },
      {
        path: "detail/:id",
        element: lazy(() => import("./../pages/HomeTemplate/DetailMovie")),
      },
      {
        path: "ticketroom/:id",
        element: lazy(() => import("./../pages/HomeTemplate/Ticketroom")),
      },
      {
        path: "infoUser",
        element: lazy(() => import("./../pages/HomeTemplate/InfoUser")),
      },
    ],
  },
  {
    path: "admin",
    element: lazy(() => import("./../pages/AdminTemplate")),
    nested: [
      {
        path: "films",
        element: lazy(() => import("./../pages/AdminTemplate/Film")),
      },
      {
        path: "users",
        element: lazy(() => import("./../pages/AdminTemplate/User")),
      },
    ],
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => {
            let NewItem = item.element;
            return (
              <Route key={item.path} path={item.path} element={<NewItem />} />
            );
          })}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};

export default renderRoutes;
