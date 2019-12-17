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
        defaultRouter: 0,
        routes: [
          {
            path: "/admin/comment",
            exact: true,
            component: CommentAdmin
          },
          {
            path: "/admin/content",
            exact: true,
            component: ContentAdmin
          },
          {
            path: "/admin/fans",
            exact: true,
            component: FansAdmin
          },
          {
            path: "/admin/source",
            exact: true,
            component: SourceAdmin
          },
          {
            path: "/admin/comment/:id",
            exact: true,
            component: NotFound
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
        defaultRouter: 0,
        routes: [
          {
            path: "/released/article",
            exact: true,
            component: ArticleReleased
          },
          {
            path: "/released/atlas",
            exact: true,
            component: AtlasReleased
          },
          {
            path: "/released/video",
            exact: true,
            component: VideoReleased
          },
          {
            path: "/released/dynamic",
            exact: true,
            component: DynamicReleased
          },
          {
            path: "/released/compilation",
            exact: true,
            component: CompilationReleased
          },
          {
            path: "/released/question",
            exact: true,
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

export const defaultRoutes = routes[1].routes;
