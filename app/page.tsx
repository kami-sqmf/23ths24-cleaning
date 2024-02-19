export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-around px-4 py-2 space-y-1 w-full border-2 border-dotted">
        <div className="flex flex-col justify-center items-center w-24 text-blue-800">
          <span className="text-lg font-bold">DWM</span>
          <span className="text-sm">值日生管理</span>
        </div>
        <a href="/manage/ssr" className="flex flex-col justify-center items-center w-24 text-cyan-600">
          <span className="text-lg font-bold">SSR</span>
          <span className="text-sm">績效登記</span>
        </a>
        <a href="/manage/hrm" className="flex flex-col justify-center items-center w-24 text-green-800">
          <span className="text-lg font-bold">HRM</span>
          <span className="text-sm">人事資料</span>
        </a>
      </div>
      <div className="flex flex-col px-4 py-2 space-y-1 w-full border-2 border-dotted">
        <h2 className="font-semibold flex-1">當日值日生</h2>
        <div className="grid grid-cols-2 justify-between gap-y-1">
          <div className="flex flex-col">
            <span>林沛葶</span>
            <span className="text-sm">原因：{`打餐未配戴口罩`}</span>
          </div>
          <div className="flex flex-col">
            <span>許秀蓉</span>
            <span className="text-sm">原因：{`打餐未配戴口罩`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 py-2 space-y-1 w-full border-2 border-dotted">
        <div className="flex flex-row items-baseline">
          <h2 className="font-semibold flex-1">當日扣分榜</h2>
          <div className="text-sm space-x-2">
            <span className="text-green-800 font-semibold italic">A完美</span>
            <span className="text-blue-800 font-semibold italic">B尚可</span>
            <span className="text-yellow-600 font-semibold italic">C摸魚</span>
            <span className="text-red-800 font-semibold italic">F未做</span>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between">
          <div className="flex flex-col">
            <span><i>C</i> 朱品奕</span>
            <span className="text-sm">扣分原因：{`未做打掃工作`}</span>
          </div>
          <div className="flex flex-col">
            <span>李佑任</span>
            <span className="text-sm">扣分原因：{`洗手台下方有明顯灰塵`}</span>
          </div>
          <div className="flex flex-col">
            <span>朱品奕</span>
            <span className="text-sm">扣分原因：{`未做打掃工作`}</span>
          </div>
          <div className="flex flex-col">
            <span>李佑任</span>
            <span className="text-sm">扣分原因：{`號碼輪流`}</span>
          </div>
          <div className="flex flex-col">
            <span>朱品奕</span>
            <span className="text-sm">扣分原因：{`未做打掃工作`}</span>
          </div>
          <div className="flex flex-col">
            <span>李佑任</span>
            <span className="text-sm">扣分原因：{`號碼輪流`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 py-2 space-y-1 w-full border-2 border-dotted">
        <div className="flex flex-row items-baseline">
          <h2 className="font-semibold flex-1">整週成績預覽</h2>
          <span className="underline underline-offset-2 text-xs text-blue-400">更新資料</span>
        </div>
        <div className="grid grid-cols-2 justify-between">
          <div className="flex flex-col">
            <span>朱品奕</span>
            <span className="text-sm">原因：{`未做打掃工作`}</span>
          </div>
          <div className="flex flex-col">
            <span>李佑任</span>
            <span className="text-sm">原因：{`號碼輪流`}</span>
          </div>
        </div>
      </div>
    </>
  );
}
