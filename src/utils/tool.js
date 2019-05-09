/*
 * 工具类
 */

/*
 * 获取时间
 * year 年
 * month 月
 * day 日
 * hours 小时
 * totalDay 当月总天数
 */
export function getDays() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var days = date.getDay();
  switch (days) {
    case 1:
      days = "星期一";
      break;
    case 2:
      days = "星期二";
      break;
    case 3:
      days = "星期三";
      break;
    case 4:
      days = "星期四";
      break;
    case 5:
      days = "星期五";
      break;
    case 6:
      days = "星期六";
      break;
    case 0:
      days = "星期日";
      break;
  }
  var time = {
    year: year,
    month: month,
    day: day,
    days: days
  };
  return time;
}

/**
 * 实时刷新时间
 *
 * @export
 * @returns
 */
export function time() {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var str = hour + ":" + minutes + ":" + seconds;
  return str;
}

/////////////// 计算高度 ////////////////////////
/**
 * 获取页面高度
 *
 * @export
 * @returns
 */
export function getDocHeight() {
  return parseInt(document.body.clientHeight);
}
/**
 * 计算表格页面中最大高度
 *
 * @export
 * @param {boolean} [isEcharts=false] 是否有Echarts
 * @param {boolean} [isPage=false] 是否有分页
 * @param {boolean} [parentHeight=false] 父高度
 * @returns
 */
export function calcTableMaxHeight(isEcharts = false, isPage = false) {
  let height = getDocHeight();
  height = height - 285;
  height *= isEcharts ? 0.55 : 1;
  height -= isPage ? 40 : 0;
  return height;
}

/////////////// 数据容错处理 ////////////////////////
/**
 * 判断数组数据是否为空
 *
 * @export
 * @param {*} data 数据
 * @param {*} [def=[]] 默认值
 * @returns
 */
export function dataIsNullArray(data, def = []) {
  return data !== undefined && data !== null ? data : def;
}
/**
 * 判断数字数据是否为空
 *
 * @export
 * @param {*} data 数据
 * @param {number} [def=0] 默认值
 * @returns
 */
export function dataIsNullNumber(data, def = 0) {
  return data !== undefined && data !== null && data !== "" ? data : def;
}

//////////////////// ECharts //////////////////////////////////
/**
 * 初始化echarts
 *
 * @export
 * @param {*} echart echart对象
 * @param {*} options echart配置
 * @returns
 */
export function initECharts(echart, options) {
  // eslint-disable-next-line
  const myEchart = echarts.init(echart);
  myEchart.setOption(options);
  return myEchart;
}
