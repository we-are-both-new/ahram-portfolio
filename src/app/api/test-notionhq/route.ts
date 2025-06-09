import notionClient from "@/lib/notionhq";
import { NextResponse } from "next/server";

const NOTION_CAREER_DB_ID = process.env.NOTION_CAREER_DB_ID as string;
if (!NOTION_CAREER_DB_ID) {
  throw new Error("Missing NOTION_CAREER_DB_ID in environment variables.");
}

export async function GET() {
  try {
    // notionClient
    const response = await notionClient.databases.query({
      database_id: NOTION_CAREER_DB_ID,
    });
    // console.log("[notionClient] response.results = ", response.results);
    return NextResponse.json(response.results);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unexpected error occurred while fetching data.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
