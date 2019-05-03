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
  var hours = date.getHours();
  var mGetDate = function(year, month) {
    var d = new Date(year, month, 0);
    return d.getDate();
  };
  var totalDay = mGetDate(year, month);
  var time = {
    year: year,
    month: month,
    day: day,
    hours: hours,
    totalDay: totalDay
  };
  return time;
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
