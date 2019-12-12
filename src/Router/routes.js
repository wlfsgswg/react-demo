import {
  Home,
  Login,
  NotFound,
  Menu,
  Analysis,
  Develop,
  Interaction,
  Profit,
  Question,
  Released,
  Tool
} from "../container/index.js";
// 首页
import { Detail } from "./../container/Home/children.js";

export const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/",
    component: Menu,
    routes: [
      {
        path: "/home",
        component: Home,
        routes: [
          {
            path: "/home/detail",
            component: Detail
          }
        ]
      },
      {
        path: "/analysis",
        component: Analysis,
        routes: []
      },
      {
        path: "/develop",
        component: Develop,
        routes: []
      },
      {
        path: "/interaction",
        component: Interaction,
        routes: []
      },
      {
        path: "/profit",
        component: Profit,
        routes: []
      },
      {
        path: "/question",
        component: Question,
        routes: []
      },
      {
        path: "/released",
        component: Released,
        routes: []
      },
      {
        path: "/tool",
        component: Tool,
        routes: []
      }
    ]
  },
  {
    path: "*",
    component: NotFound
  }
];

export const menuItem = routes[1].routes;

// export const defaultRoute = routes[1].routes ? routes[1].routes[0] : routes[0];
