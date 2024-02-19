import { db } from "./db";
import { students, tasks } from "./schema";

const main = async () => {
  try {
    console.log("正在恢復資料庫預設資料");
    console.log("步驟 1/2 => 刪除現存資料");
    await db.delete(tasks);
    await db.delete(students);
    console.log("步驟 2/2 => 寫入預設資料");
    await db.insert(students).values([
      { number: 1, name: "林翊家" },
      { number: 2, name: "陳冠齊" },
      { number: 3, name: "李祐任" },
      { number: 4, name: "周仁泳" },
      { number: 5, name: "洪啟恩" },
      { number: 6, name: "張佑安" },
      { number: 7, name: "莊育愷" },
      { number: 8, name: "蔡均德" },
      { number: 9, name: "鄧安佐" },
      { number: 10, name: "魏彥程" },
      { number: 11, name: "朱品奕" },
      { number: 12, name: "李恩緯" },
      { number: 13, name: "林山慧" },
      { number: 14, name: "林楊大禛" },
      { number: 15, name: "殷嘉遠" },
      { number: 16, name: "張仁翔" },
      { number: 17, name: "張秉任" },
      { number: 18, name: "許晉豪" },
      { number: 19, name: "陳忻紘" },
      { number: 20, name: "黃彥中" },
      { number: 21, name: "葉家豪" },
      { number: 22, name: "廖偉恩" },
      { number: 23, name: "簡陳侑軒" },
      { number: 24, name: "吳京" },
      { number: 25, name: "黃騏" },
      { number: 26, name: "吳威霆" },
      { number: 27, name: "林千譯" },
      { number: 28, name: "林沛葶" },
      { number: 29, name: "游翔旭" },
      { number: 30, name: "許秀蓉" },
      { number: 31, name: "黃昫穎" },
      { number: 32, name: "鄧羽婕" },
      { number: 33, name: "吳佳臻" },
      { number: 34, name: "吳宥葳" },
      { number: 35, name: "李恩琦" },
      { number: 36, name: "陳品潔" },
      { number: 37, name: "陳筱丰" },
      { number: 38, name: "彭心慧" },
      { number: 39, name: "黃妍蓁 " },
      { number: 40, name: "鄭詠潔" }
    ]);

    await db.insert(tasks).values([
      { name: "教室掃地(左)" },
      { name: "教室掃地(右)" },
      { name: "教室拖地(左)" },
      { name: "教室拖地(右)" },
      { name: "教室窗戶(左）" },
      { name: "教室窗戶(右)" },
      { name: "教室走廊(掃拖)" },
      { name: "黑板" },
      { name: "櫃子+窗台+講台" },
      { name: "電腦桌+講桌" },
      { name: "教室垃圾" },
      { name: "教室回收(寶特瓶+塑膠)" },
      { name: "教室回收(紙餐盒+其他)" },
      { name: "教室廚餘" },
      { name: "女廁(拖地)" },
      { name: "女廁(廁間)" },
      { name: "女廁(洗手台+鏡子)" },
      { name: "導師室(掃拖)" },
      { name: "導師室走廊(掃拖)" },
      { name: "導師室洗手台" },
      { name: "導師室垃圾" },
      { name: "導師室回收(紙餐盒+其他)" },
      { name: "導師室回收(寶特瓶+塑膠)" },
      { name: "導師室廚餘" },
      { name: "平台(左掃拖)" },
      { name: "平台(右掃拖)" },
      { name: "女廁(垃圾)" },
      { name: "樓梯" },
      { name: "掃具間" },
      { name: "洗手台" },
      { name: "扶手+飲水機" },
      { name: "外掃" },
      { name: "機動組（公）" },
    ]);
  } catch (error) {
    console.error(error);
    throw new Error("恢復資料庫發生錯誤");
  }
};

main();