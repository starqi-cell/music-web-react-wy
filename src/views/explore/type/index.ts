// 基础音质信息接口

export interface MusicQuality {
  br: number;           // 比特率
  fid: number;          // 文件ID
  size: number;         // 文件大小
  vd: number;           // 音量差值
  sr: number;           // 采样率
}

// 歌手信息接口

export interface Artist {
  name: string;         // 歌手名
  tns: string[];        // 翻译名
  alias: string[];      // 别名
  id: number;           // 歌手ID
  alia?: string[];      // 额外别名（可选）
}


export // 专辑信息接口
interface Album {
  picUrl: string;       // 封面图片URL
  name: string;         // 专辑名
  tns: string[];        // 翻译名
  pic_str: string;      // 图片ID字符串
  id: number;           // 专辑ID
  pic: number;          // 图片ID
}


export // 原歌曲简单数据接口
interface OriginSongSimpleData {
  artists: Artist[];    // 原唱歌手
  name: string;         // 原曲名
  songId: number;       // 原曲ID
  albumMeta: {
    name: string;       // 原专辑名
    id: number;         // 原专辑ID
  };
}


export // 收费信息接口
interface ChargeInfo {
  rate: number;         // 音质码率
  chargeType: number;   // 收费类型 (0:免费, 1:付费)
}

export 
// 免费试听权限接口
interface FreeTrialPrivilege {
  userConsumable: boolean;
  resConsumable: boolean;
  cannotListenReason: number;
  listenType: number;
}

export 
// 歌曲权限信息接口
interface Privilege {
  flag: number;
  code: number;
  dlLevel: string;              // 下载等级
  subp: number;
  fl: number;                   // 流畅音质
  fee: number;                  // 收费类型
  dl: number;                   // 下载音质
  plLevel: string;              // 播放等级
  maxBrLevel: string;           // 最大比特率等级
  rightSource: number;
  maxbr: number;                // 最大比特率
  id: number;                   // 歌曲ID
  sp: number;
  payed: number;                // 是否已付费
  st: number;
  chargeInfoList: ChargeInfo[]; // 各音质收费信息
  freeTrialPrivilege: FreeTrialPrivilege;
  downloadMaxbr: number;
  downloadMaxBrLevel: string;
  cp: number;
  preSell: boolean;
  playMaxBrLevel: string;
  cs: boolean;
  toast: boolean;
  playMaxbr: number;
  flLevel: string;
  pl: number;                   // 播放音质

}

export 
// 歌曲信息接口（核心）
interface Song {
  no: number;                   // 序号
  rt: string;                   // 未知
  copyright: number;            // 版权信息
  fee: number;                  // 收费类型
  privilege: Privilege;         // 权限信息
  mst: number;
  pst: number;
  pop: number;                  // 热度
  dt: number;                   // 时长（毫秒）
  rtype: number;
  s_id: number;
  rtUrls: string[];
  resourceState: boolean;
  id: number;                   // 歌曲ID
  sq?: MusicQuality;            // 无损音质
  st: number;
  cd: string;                   // CD编号
  publishTime: number;          // 发布时间（时间戳）
  cf: string;
  originCoverType: number;      // 翻唱类型 (0:未知, 1:原版, 2:翻唱, 3:伴奏)
  h: MusicQuality;              // 高品质
  mv: number;                   // MV ID
  album: Album;                    // 专辑信息
  l: MusicQuality;              // 普通品质
  m: MusicQuality;              // 中等品质
  version: number;              // 版本号
  cp: number;
  alia: string[];               // 歌曲别名
  djId: number;
  single: number;
  ar: Artist[];                 // 歌手列表
  ftype: number;
  t: number;
  v: number;
  name: string;                 // 歌曲名
  mark: number;                 // 标记位
  tns?: string[];               // 翻译名（可选）
  hr?: MusicQuality;            // 高解析度音质（可选）
  originSongSimpleData?: OriginSongSimpleData; // 原曲信息（翻唱歌曲有）
  duration: number;              // 歌曲时长（毫秒）
  artists?: Artist[];                // 歌手列表（部分接口可能使用 arists 字段）
}



// 结果接口
export interface SearchResult {
    songs: Song[];              // 歌曲列表
    songCount: number;          // 总歌曲数
}