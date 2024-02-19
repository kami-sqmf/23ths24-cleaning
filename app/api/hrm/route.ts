import { getStudents, getTasks, updateStudentsTask } from "@/app/libs/db/db"

export async function GET() {
  const tasks = await getTasks();
  const students = await getStudents();
  return Response.json({
    tasks: tasks,
    students: students
  });
}

export async function POST(request: Request) {
  const res = await request.json()
  if(res.stuId == null && res.taskId == null) return Response.error();
  updateStudentsTask(res.stuId, res.taskId);
  return Response.json({ res });
}