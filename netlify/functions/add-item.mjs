// CREATE: adds a new item to the database.
// The browser calls this at /api/add-item and sends { title: "..." }
//Added to the await section because I needed to add category to the equation. 



import { getDatabase } from "@netlify/database";

const db = getDatabase();

export default async function handler(req) {
  const data = await req.json();

  await db.sql`INSERT INTO items (title, category) VALUES (${data.title}, ${data.category})`;

  return Response.json({ message: "Item added" });
}

export const config = { path: "/api/add-item" };
