'use client';
import { Students, Tasks } from '@/app/libs/db/schema';
import useSWR from 'swr';
import { HrmTableItems } from './item';

type HrmRouteRes = {
  tasks: Tasks[];
  students: Students[];
}

const endpoint = "/api/hrm";
async function fetcher(endpoint: string): Promise<HrmRouteRes> {
  const res = await fetch(endpoint, { method: "GET", next: { revalidate: 3600 } });
  return res.json();
}

const HrmTable = () => {
  const { data, error, isLoading, mutate } = useSWR(endpoint, fetcher);
  if (isLoading) return "資料正在載入中";
  if (error) return "伺服器錯誤，請再次查明";
  return (
    <table className='text-center table-auto w-[100%] text-lg [&>tbody>:nth-child(odd)]:text-slate-700 [&>tbody>:nth-child(evan)]:text-gray-600'>
      <thead>
        <tr>
          <th>座號</th>
          <th>姓名</th>
          <th>目前工作</th>
        </tr>
      </thead>
      <HrmTableItems data={data!} didUpdate={() => mutate()} />
    </table>
  )
}

export { HrmTable, type HrmRouteRes };
