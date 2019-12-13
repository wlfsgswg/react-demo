/**
 *
 * @param {*} path 必填 string 原始路由参数
 * @param {*} rank 非必填 默认 1 最大为3 number 需要返回的是几级路由
 * @return string
 */
export const routeMatching = (path, rank = 1) => {
  if (!path) throw "path不应该为undefined";
  if (rank > 3) throw `暂不支持截取${rank}级路由`;
  const routerArr = path.split("/");
  let router;
  router =
    rank === 1
      ? "/" + routerArr[1]
      : rank === 2
      ? "/" + routerArr[1] + "/" + routerArr[2]
      : "/" + routerArr[1] + "/" + routerArr[2] + "/" + routerArr[3];
  return router;
};
