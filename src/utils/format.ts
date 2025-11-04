export const formatPlayCount = (count: number) => {
    if(count>100000){
        return Math.floor(count/10000) + '万';
    }else{
    return count + '';
    }
}

export const getImageSize = (url: string, width: number, height: number=width) => {
    return url+`?param=${width}x${height}`;
}