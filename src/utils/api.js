/* eslint-disable */
/*
 * 接口类
 */
import http from "./http";

/*
 * 接口名
 */
export const AllData = "/api/allDatas";
/*
 * 接口
 */
export async function allData(params) {
  const res = await http.get(`${AllData}`, params);
  return res;
}