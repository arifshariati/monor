import { drizzle } from 'drizzle-orm/neon-http';
import { createNeonDrizzleInstance } from '@monor/utils/db/drizzle';

let dbInstance: ReturnType<typeof drizzle> | null = null;

export const getNeonDrizzleDBInstance = () => {
  const databaseUrl = process.env.NEXT_PUBLIC_DATABASE_URL;

  if (!databaseUrl) {
    throw new Error(
      'NEXT_PUBLIC_DATABASE_URL environment variable is not set.'
    );
  }

  if (!dbInstance) {
    dbInstance = createNeonDrizzleInstance(databaseUrl);
  }

  return dbInstance;
};
