'use client';
import { ChangeEvent, useEffect, useState } from "react";
import { HrmRouteRes } from "./table";

const HrmTableItems = ({ data, didUpdate }: { data: HrmRouteRes, didUpdate: () => void }) => {
  const onChange = (e: ChangeEvent<HTMLSelectElement>, stuId: string) => {
    fetch("/api/hrm", {
      method: "POST",
      body: JSON.stringify({
        stuId: stuId,
        taskId: e.target.value,
      })
    })
    didUpdate();
  }
  return (
    <tbody>
      {data.students.sort((a, b) => a.number - b.number).map((stu, index) => {
        return (
          <tr key={index}>
            <td className='w-10'>{stu.number}</td>
            <td className='w-28'>{stu.name}</td>
            <td>
              <select name="tasks" defaultValue={stu.currentTasks} onChange={(e) => { onChange(e, stu.uuid) }} className="bg-transparent border w-full py-0.5 rounded text-center outline-none">
                <option>--請選擇--</option>
                {data.tasks.map((task, index) => (
                  <option key={index} value={task.uuid} title={task.description}>{task.name}</option>
                ))}
              </select>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}

export { HrmTableItems };