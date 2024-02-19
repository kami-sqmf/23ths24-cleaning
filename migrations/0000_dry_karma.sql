DO $$ BEGIN
 CREATE TYPE "grade" AS ENUM('A', 'B', 'C', 'D', 'E', 'F');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "when" AS ENUM('AM', 'PM');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "daily_worker" (
	"id" serial PRIMARY KEY NOT NULL,
	"student" uuid,
	"week" integer,
	"reason" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "grades" (
	"id" serial PRIMARY KEY NOT NULL,
	"owner" uuid,
	"task_uuid" uuid,
	"date" date DEFAULT now(),
	"when" "when",
	"grade" "grade"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "students" (
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"number" smallint,
	"name" text NOT NULL,
	"line_id" text,
	"current_task_id" uuid,
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "students_uuid_unique" UNIQUE("uuid"),
	CONSTRAINT "students_number_unique" UNIQUE("number")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tasks" (
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"archive" boolean DEFAULT false,
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "daily_worker" ADD CONSTRAINT "daily_worker_student_students_uuid_fk" FOREIGN KEY ("student") REFERENCES "students"("uuid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "grades" ADD CONSTRAINT "grades_owner_students_uuid_fk" FOREIGN KEY ("owner") REFERENCES "students"("uuid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "grades" ADD CONSTRAINT "grades_task_uuid_students_uuid_fk" FOREIGN KEY ("task_uuid") REFERENCES "students"("uuid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "students" ADD CONSTRAINT "students_current_task_id_tasks_uuid_fk" FOREIGN KEY ("current_task_id") REFERENCES "tasks"("uuid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
