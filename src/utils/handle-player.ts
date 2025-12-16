// src/utils/handle-player.ts
//  处理播放器相关的工具函数

// 获取播放器播放链接
export function getPlayerUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

// 格式化时间，返回“mm:ss”格式
function padLeft(time: number) {
  const timeStr = time + ''
  return ('00' + timeStr).slice(timeStr.length)
}

// 格式化时间，返回“mm:ss”格式
export function formatTime(time: number) {
  // 0.将毫秒转成秒
  time = time / 1000

  // 1.获取时间
  const minute = Math.floor(time / 60)
  const second = Math.floor(time) % 60

  // 2.拼接字符串
  return padLeft(minute) + ':' + padLeft(second)
}
