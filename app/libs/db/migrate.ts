import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from "./db";

const main = async () => {
  try {
    console.log("正在進行資料庫遷移");
    await migrate(db, { migrationsFolder: "./migrations" });
    console.log("資料庫遷移已成功執行");
  } catch (error) {
    console.error("資料庫遷移錯誤 =>", error);
    process.exit(1);
  }
};

main();