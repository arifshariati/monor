import {
  pgSchema,
  serial,
  varchar,
  text,
  integer,
  timestamp,
} from 'drizzle-orm/pg-core';

export const userAiContentsSchema = pgSchema('user-ai-contents-schema');

export const userAiContents = userAiContentsSchema.table('user-ai-contents', {
  id: serial('id').primaryKey(),
  input: varchar('input'),
  slug: varchar('slug'),
  content: text('content'),
  wordCount: integer('word-count'),
  userEmail: varchar('user-email'),
  createdAt: timestamp('created-at').defaultNow(),
});

export type UserAiContentType = {
  id: number;
  input: string | null;
  slug: string | null;
  content: string | null;
  wordCount: number | null;
  userEmail: string | null;
  createdAt: Date | null;
};