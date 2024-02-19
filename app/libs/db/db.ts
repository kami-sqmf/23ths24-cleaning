import "@/app/libs/env";
import * as schema from "./schema";
import { drizzle } from 'drizzle-orm/neon-http';
import { neon, neonConfig } from '@neondatabase/serverless';
import { eq } from "drizzle-orm";
neonConfig.fetchConnectionCache = true;

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });

export async function getStudents() {
  return await db.select().from(schema.students);
}

export async function getTasks() {
  return await db.select().from(schema.tasks);
}

export async function updateStudentsTask(stuId: string, taskId: string) {
  return await db.update(schema.students)
    .set({ currentTasks: taskId })
    .where(eq(schema.students.uuid, stuId))
    .returning();
}

export async function getGradeByDate(date: string) {
}

export async function addGrade(rate: schema.GradesEnum, stuId: string, taskId: string) {
  const date = new Date();
  const hour = date.getHours();
  return await await db.insert(schema.grades).values({
    ownerId: stuId,
    taskId: taskId,
    date: date.toDateString(),
    when: hour >= 13 ? "PM" : "AM"
  }).returning();
}