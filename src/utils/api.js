/* eslint-disable */
/*
 * 接口类
 */
import http from "./http";

/*
 * 接口名
 */
// 重要建筑
export const ImportantBuilding = "/api/building";
// 社会单位
export const SocialUnit = "/api/socialUnit";
/*
 * 接口
 */
// 重要建筑
export async function importantBuilding(params) {
  const res = await http.get(`${ImportantBuilding}`, params);
  return res;
}
// 重要建筑
export async function socialUnit(params) {
  const res = await http.get(`${SocialUnit}`, params);
  return res;
}