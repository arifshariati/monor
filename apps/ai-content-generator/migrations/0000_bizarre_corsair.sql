CREATE SCHEMA "user-ai-contents-schema";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user-ai-contents-schema"."user-ai-contents" (
	"id" serial PRIMARY KEY NOT NULL,
	"input" varchar,
	"slug" varchar,
	"content" text,
	"word-count" integer,
	"user-email" varchar,
	"created-at" timestamp DEFAULT now()
);
