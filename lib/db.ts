import { neon } from '@neondatabase/serverless';

// Load connection string from environment variable
const connectionString = process.env.DATABASE_URL || '';

export const sql = neon(connectionString);
