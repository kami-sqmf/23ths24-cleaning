import { getStudents } from "@/app/libs/db/db"

export async function POST() {
  const students = await getStudents();
  return Response.json(students);
}