import pg from "pg";
import env from "dotenv";

env.config();

const { Pool } = pg;

const db = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.on("error", (err) => {
  console.error("Database error:", err);
});

// Optional connection test
db.query("SELECT NOW()")
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection failed", err));

export default db;