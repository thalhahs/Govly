import * as pg from "pg";

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});

await client.connect();

const result = await client.query("SELECT * FROM governments");

const governments = result.rows;

console.log({ governments });

await client.end();

type Government = {
  id: number;
  name: string;
  slug: string;
};

try {
  const result = await client.query("SELECT * FROM governments");
  const governments = result.rows;
  console.log({ governments });
} catch (error) {
  console.error(error);
  console.error("Error connecting to the database");
} finally {
  await client.end();
}
