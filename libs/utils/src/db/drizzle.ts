import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

export const createNeonDrizzleInstance = (databaseUrl: string) => {
  return drizzle(neon(databaseUrl));
};
