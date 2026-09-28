type Saga = {
    name: "Percy Jackson & the Olympians" | "The Heroes of Olympus" | "The Trials of Apollo",
    booksNumber: number,
    description?: string
};

type Book = {
    title: string,
    author: "Rick Riordan",
    publicationDate: string | Date,
    synopsis: string,
    pagesNumber: number,
    saga: Saga,
    photoLink?: string
};

export { type Book, type Saga };