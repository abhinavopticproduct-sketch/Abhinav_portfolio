const { neon } = require('@neondatabase/serverless');
require('dotenv').config({ path: '.env.local' });

async function initDb() {
    if (!process.env.DATABASE_URL) {
        console.error('Error: DATABASE_URL is not set in .env.local');
        process.exit(1);
    }

    const sql = neon(process.env.DATABASE_URL);

    try {
        console.log('Creating messages table...');
        await sql`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
        console.log('Table created successfully!');
    } catch (error) {
        console.error('Error creating table:', error);
    }
}

initDb();
