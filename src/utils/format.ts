// src/utils/format.ts
// 格式化相关的工具函数

// 格式化播放数量，超过一万显示为“xx万”
export const formatPlayCount = (count: number) => {
    if(count>100000){
        return Math.floor(count/10000) + '万';
    }else{
    return count + '';
    }
}

// 获取指定尺寸的图片链接
export const getImageSize = (url: string, width: number, height: number=width) => {
    return url+`?param=${width}y${height}`;
}


// 格式化时间，返回“月日”格式
export const formatMonthDay = (time: number) => {
  const date = new Date(time);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return month + "月" + day + "日";
}

// 格式化时间，返回“分:秒”格式
export const formatMinuteSecond = (time: number) => {
  const date = new Date(time);
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return ("00" + minute).slice(-2) + ":" + ("00" + second).slice(-2);
}