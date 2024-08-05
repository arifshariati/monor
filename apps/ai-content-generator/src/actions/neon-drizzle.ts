import { eq } from 'drizzle-orm';
import { getNeonDrizzleDBInstance } from '../db/neonDrizzle';
import { userAiContents } from '../db/schema';

const db = getNeonDrizzleDBInstance();

export const getRecords = async () => {
  try {
    return await db.select().from(userAiContents);
  } catch (e) {
    console.log(e);
  }
};

export const insertRecord = async (payload: Record<string, unknown>) => {
  try {
    await db.insert(userAiContents).values(payload);
  } catch (e) {
    console.log(e);
  }
};

export const updateRecord = async (
  id: number,
  payload: Record<string, unknown>
) => {
  try {
    await db
      .update(userAiContents)
      .set(payload)
      .where(eq(userAiContents.id, id));
  } catch (e) {
    console.log(e);
  }
};

export const deleteRecord = async (id: number) => {
  try {
    await db.delete(userAiContents).where(eq(userAiContents.id, id));
  } catch (e) {
    console.log(e);
  }
};
