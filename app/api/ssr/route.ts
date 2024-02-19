import { addGrade } from "@/app/libs/db/db";

export async function GET() {
  
  return Response.error();
}

export async function POST(request: Request) {
  const res = await request.json();
  if (res.stuId == null && res.taskId == null && res.rate == null) return Response.error();
  addGrade(res.rate, res.stuId, res.taskId);
  return Response.json({ res });
}