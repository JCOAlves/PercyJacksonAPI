type Book = {
    title: string,
    author: "Rick Riordan",
    publicationDate: string | Date,
    Synopsis: string,
    pagesNumber: number,
    photoLink?: string[] | string

};

type Saga = {
    name: string | "Percy Jackson & the Olympians" | "The Heroes of Olympus" | "The Trials of Apollo",
    booksNumber: number,
    books: Book[],
    description?: string
}

export { type Book, type Saga };