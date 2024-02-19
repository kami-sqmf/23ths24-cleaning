import { SsrSelectMenu } from "./select-menu";

export default function SSR() {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-gray-600 mb-2">成績登記</h2>
        <div className="flex flex-col px-4 py-2 space-y-1 w-full border-2 border-gray-600 border-dotted">
          <SsrSelectMenu />
        </div>
      </div>
    </div>
  );
}
