import books from "@/app/api/db";

export async function GET() {
  return Response.json(books);
}

export async function POST(request: Request) {
  try {
    const newBook = await request.json();
    books.push(newBook);
    return Response.json(newBook, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }
}
