// 前后端请求使用axios
import axios from "axios";

export const getDemo = () => {
  axios
    .get("/brand/api/v1/global")
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
