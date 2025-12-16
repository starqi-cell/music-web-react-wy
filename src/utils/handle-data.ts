// src/utils/handle-data.ts
//  处理分类数据相关的工具函数

export function handleSongsCategory(data: any) {
  // 1.获取category
  const category = data.categories;

  // 2.创建categoryData
  const categoryData: any[] = Object.entries(category).map(([key, value]) => {
    return {
      name: value,
      subs: []
    }
  })

  // 3.将subs添加到对应的category中
  for (let item of data.sub) {
    categoryData[item.category].subs.push(item);
  }

  return categoryData;
}

export const singerAlphas = ["-1", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0"];
