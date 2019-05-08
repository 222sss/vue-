/* eslint-disable */
/*
 * 接口类
 */
import http from "./http";

/*
 * 接口名
 */
// 重要建筑表格
export const BuildingHomeTable = "/api/seller";
/*
 * 接口
 */
// 重要建筑表格
export async function buildingHomeTable(params) {
  const res = await http.get(`${BuildingHomeTable}`, params);
  return res;
}