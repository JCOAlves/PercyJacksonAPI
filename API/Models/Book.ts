type Book = {
    name: string,
    author: "Rick Riordan",
    publicationDate: string | Date,
    title: string,
    Synopsis: string,
    pagesNumber: number,
    photoLink?: string[] | string
    
};

type Saga = {
    name: "Percy Jackson & the Olympians" | "The Heroes of Olympus" | "The Trials of Apollo",
    booksNumber: number,
    books: Book[]
}

export { type Book, type Saga };