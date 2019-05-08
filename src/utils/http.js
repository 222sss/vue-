/* eslint-disable */
/*
 * http请求类
 */
import axios from "axios";
import { duration } from "./global";
import { URL } from "./api";
import { Message } from "element-ui";

// 请求超时
const timeout = 30000;

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.resolve(error.response);
  }
);

function checkStatus(response) {
  // 处理http状态
  // 正常状态返回数据
  if (response.status === 200 || response.status === 304) {
    return response.data;
  }
  // 异常状态返回404,500错误等
  let message = "";
  switch (response.status) {
    case 400:
      // 错误请求
      message = "错误请求";
      break;
    case 401:
      // 未授权
      message = "服务器未授权的请求";
      break;
    case 403:
      // 拒绝访问
      message = "服务器拒绝访问";
      break;
    case 404:
      // 未找到该资源
      message = "无服务器请求";
      break;
    case 405:
      // 请求方法未允许
      message = "服务器未允许的请求方法";
      break;
    case 408:
      // 请求超时
      message = "服务器繁忙";
      break;
    case 500:
      // 服务器错误
      message = "服务器错误";
      break;
    case 501:
      // 网络未实现
      message = "无网络";
      break;
    case 502:
      // 网络错误
      message = "网络错误";
      break;
    case 503:
      // 服务不可用
      message = "服务不可用";
      break;
    case 504:
      // 网络超时
      message = "网络信号弱";
      break;
    case 505:
      // http版本不支持该请求
      message = "不支持的请求";
      break;
    default:
      message = `连接错误${response.status}`;
  }
  return {
    code: response.status,
    message: message,
    data: null
  };
}

function checkCode(res) {
  // console.log(res.code)
  // 统一处理错误信息，接口中code不存在
  if (res.code) {
    Message.error({
      duration: duration,
      message: `${res.message}！`,
      showClose: true
    });
  }
  return res;
}

export default {
  get(url, params) {
    return axios({
      method: "get",
      url,
      params,
      timeout: timeout,
      headers: {}
    })
      .then(checkStatus)
      .then(checkCode);
  },
  post(url, data) {
    return axios({
      method: "post",
      url,
      data: data,
      timeout: timeout,
      headers: {}
    })
      .then(checkStatus)
      .then(checkCode);
  },
  put(url, data) {
    return axios({
      method: "put",
      url,
      data: data,
      timeout: timeout,
      headers: {}
    })
      .then(checkStatus)
      .then(checkCode);
  },
  delete(url, params) {
    return axios({
      method: "delete",
      url,
      params: params,
      timeout: timeout,
      headers: {}
    })
      .then(checkStatus)
      .then(checkCode);
  },
  deleteBody(url, data) {
    return axios({
      method: "delete",
      url,
      data: data,
      timeout: timeout,
      headers: {}
    })
      .then(checkStatus)
      .then(checkCode);
  }
};
