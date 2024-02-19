import { HrmTable } from "./table"

export default function HRM() {
  
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-gray-600 mb-2">工作分配</h2>
        <div className="flex flex-col px-4 py-2 space-y-1 w-full border-2 border-gray-600 border-dotted">
          <HrmTable />
        </div>
      </div>
    </div>
  );
}
