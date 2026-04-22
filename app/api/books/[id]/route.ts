import books from "@/app/api/db";

export async function PUT(
    request: Request,
    context: { params: { id: string } }
) {
    const id  = +context.params.id;
    const book = await request.json();

    const index = books.findIndex((b) => b.id === id);

    if (index === -1) {
        return Response.json({ error: "Book not found" }, { status: 404 });
    }

    books[index] = book;
    return Response.json(book);
}

export async function DELETE(
    request: Request,
    context: { params: { id: string } }
) {
    const id = +context.params.id;
    const index = books.findIndex((b) => b.id === id);

    if (index === -1) {
        return Response.json({ error: "Book not found" }, { status: 404 });
    }

    books.splice(index, 1);
    return Response.json(books);
}