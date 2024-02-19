import { relations } from 'drizzle-orm';
import { boolean, date, integer, pgEnum, pgTable, serial, smallint, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const tasks = pgTable('tasks', {
  uuid: uuid('uuid').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  archive: boolean("archive").default(false),
  createdAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
})

export interface Tasks {
  uuid: string;
  name: string;
  description: string,
  archive: boolean,
  updatedAt: string;
}

export const students = pgTable('students', {
  uuid: uuid('uuid').defaultRandom().unique().primaryKey(),
  number: smallint("number").unique(),
  name: text('name').notNull(),
  lineId: text('line_id'),
  currentTasks: uuid('current_task_id').references(() => tasks.uuid),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

export interface Students {
  uuid: string;
  number: number;
  name: string;
  lineId: string;
  currentTasks: string;
  updatedAt: string;
}

export type GradesEnum = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
export const gradesEnum = pgEnum('grade', ['A', 'B', 'C', 'D', 'E', 'F']);
export const whenEnum = pgEnum('when', ['AM', 'PM']);
export const grades = pgTable('grades', {
  id: serial("id").primaryKey(),
  ownerId: uuid('owner').references(() => students.uuid),
  taskId: uuid('task_uuid').references(() => students.uuid),
  date: date('date').defaultNow(),
  when: whenEnum("when"),
  grade: gradesEnum("grade")
})

export const assignedDaily = pgTable('daily_worker', {
  id: serial("id").primaryKey(),
  student: uuid('student').references(() => students.uuid),
  week: integer("week"),
  reason: text("reason")
})

// export const graadesRelations = relations(grades, ({ one }) => ({
//   // owner: one(students, { fields: [grades.ownerId], references: [students.uuid] }),
//   // tasks: one(tasks, { fields: [grades.taskId], references: [tasks.uuid] }),
// }))

// export const tasksRelations = relations(tasks, ({ many }) => ({
//   grades: many(grades)
// }))

// export const studentsRelations = relations(students, ({ many }) => ({
//   grades: many(grades)
// }))

// export const studentsRelation = relations(students, ({ one }) => ({
//   task: one(tasks, { fields: [students.assignedId], references: [tasks.uuid] })
// }))