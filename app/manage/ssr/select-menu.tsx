'use client';
import { addGrade } from '@/app/libs/db/db';
import { Students, Tasks } from '@/app/libs/db/schema';
import { RiArrowLeftSLine } from '@remixicon/react';
import { ChangeEvent, useState } from 'react';
import useSWR from 'swr';

type HrmRouteRes = {
  tasks: Tasks[];
  students: Students[];
}

const endpoint = "/api/hrm";
async function fetcher(endpoint: string): Promise<HrmRouteRes> {
  const res = await fetch(endpoint, { method: "GET", next: { revalidate: 3600 } });
  return res.json();
}

const SsrSelectMenu = () => {
  const { data, error, isLoading, mutate } = useSWR(endpoint, fetcher);
  const [level, setLevel] = useState(1);
  const [selected, setSelected] = useState("");
  if (isLoading) return "資料正在載入中";
  if (error) return "伺服器錯誤，請再次查明";
  const onChange = (rate: string, stuId: string, taskId: string) => {
    fetch("/api/ssr", {
      method: "POST",
      body: JSON.stringify({
        stuId: stuId,
        taskId: taskId,
        rate: rate
      })
    })
    mutate();
    setLevel(1);
  }
  return (
    <div className='flex flex-col'>
      {level === 1 &&
        <div className='grid grid-flow-row grid-cols-3'>
          {data?.students.sort((a, b) => a.number - b.number).map((stu, i) => (
            <div key={i} className='flex flex-col items-center justify-center my-2 mx-1 border px-2 py-0.5 rounded' onClick={() => {
              setSelected(stu.uuid);
              setLevel(2);
            }}>
              <span className='truncate'>{stu.number} {stu.name}</span>
              <span className='text-xs truncate w-full text-center'>{data.tasks.find(task => task.uuid === stu.currentTasks)?.name}</span>
            </div>
          ))}
        </div>
      }
      {level === 2 &&
        <div className='w-full flex flex-col justify-center'>
          <div className='flex flex-row space-x-4'>
            <RiArrowLeftSLine onClick={() => { setLevel(level - 1) }} className="w-7 h-7 flex-grow-0" />
            <div className='flex flex-col'>
              <span className='text-lg font-semibold'>{data?.students.find(stu => stu.uuid === selected)?.number} {data?.students.find(stu => stu.uuid === selected)?.name}</span>
              <span className=''>{data?.tasks.find(task => task.uuid === data?.students.find(stu => stu.uuid === selected)?.currentTasks)?.name}</span>
            </div>
          </div>
          <div className='grid grid-flow-row grid-cols-1 gap-2 my-8'>
            <span className='px-4 py-2 rounded-full border text-center text-green-800 border-green-800' onClick={
              () => {onChange("A", selected, data?.students.find(stu => stu.uuid === selected)?.currentTasks!)}
            }>A 完美</span>
            <span className='px-4 py-2 rounded-full border text-center text-blue-800 border-blue-800' onClick={
              () => {onChange("B", selected, data?.students.find(stu => stu.uuid === selected)?.currentTasks!)}
            }>B 尚可</span>
            <span className='px-4 py-2 rounded-full border text-center text-yellow-800 border-yellow-800' onClick={
              () => {onChange("C", selected, data?.students.find(stu => stu.uuid === selected)?.currentTasks!)}
            }>C 摸魚</span>
            <span className='px-4 py-2 rounded-full border text-center text-red-800 border-red-800' onClick={
              () => {onChange("D", selected, data?.students.find(stu => stu.uuid === selected)?.currentTasks!)}
            }>D 遲到</span>
            <span className='px-4 py-2 rounded-full border text-center text-red-800 border-red-800' onClick={
              () => {onChange("E", selected, data?.students.find(stu => stu.uuid === selected)?.currentTasks!)}
            }>E 補做</span>
            <span className='px-4 py-2 rounded-full border text-center text-red-800 border-red-800' onClick={
              () => {onChange("F", selected, data?.students.find(stu => stu.uuid === selected)?.currentTasks!)}
            }>F 未作</span>
          </div>
        </div>
      }
    </div>
  )
}

export { SsrSelectMenu };
