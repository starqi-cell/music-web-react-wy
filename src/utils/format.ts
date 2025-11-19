export const formatPlayCount = (count: number) => {
    if(count>100000){
        return Math.floor(count/10000) + '万';
    }else{
    return count + '';
    }
}

export const getImageSize = (url: string, width: number, height: number=width) => {
    return url+`?param=${width}y${height}`;
}

export const getSizeImage = getImageSize;

export const formatMonthDay = (time: number) => {
  const date = new Date(time);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return month + "月" + day + "日";
}

export const formatMinuteSecond = (time: number) => {
  const date = new Date(time);
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return ("00" + minute).slice(-2) + ":" + ("00" + second).slice(-2);
}