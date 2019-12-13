import {
  Home,
  Login,
  NotFound,
  Menu,
  Develop,
  Profit,
  Released,
  Admin,
  Message,
  Data,
  Account
} from "../container/index.js";
// 首页
// 发布
import {
  ArticleReleased,
  AtlasReleased,
  CompilationReleased,
  DynamicReleased,
  VideoReleased,
  QuestionReleased
} from "./../container/Released/children.js";
// 管理
import {
  CommentAdmin,
  ContentAdmin,
  FansAdmin,
  SourceAdmin
} from "./../container/Admin/children.js";

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
        routes: []
      },
      {
        path: "/admin",
        component: Admin,
        routes: [
          {
            path: "/admin/comment",
            component: CommentAdmin
          },
          {
            path: "/admin/content",
            component: ContentAdmin
          },
          {
            path: "/admin/fans",
            component: FansAdmin
          },
          {
            path: "/admin/source",
            component: SourceAdmin
          }
        ]
      },
      {
        path: "/develop",
        component: Develop,
        routes: []
      },
      {
        path: "/message",
        component: Message,
        routes: []
      },
      {
        path: "/profit",
        component: Profit,
        routes: []
      },
      {
        path: "/account",
        component: Account,
        routes: []
      },
      {
        path: "/released",
        component: Released,
        routes: [
          {
            path: "/released/article",
            component: ArticleReleased
          },
          {
            path: "/released/atlas",
            component: AtlasReleased
          },
          {
            path: "/released/video",
            component: VideoReleased
          },
          {
            path: "/released/dynamic",
            component: DynamicReleased
          },
          {
            path: "/released/compilation",
            component: CompilationReleased
          },
          {
            path: "/released/question",
            component: QuestionReleased
          }
        ]
      },
      {
        path: "/data",
        component: Data,
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
