import { NextResponse } from "next/server";
import { drizzle } from "drizzle-orm/libsql";
import { usersTable } from "@/db/schema";

const db = drizzle(process.env.DB_FILE_NAME!);

export async function GET() {
  const users = await db.select().from(usersTable);
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  const user = await db.insert(usersTable).values(body);
  return NextResponse.json(user);
}
