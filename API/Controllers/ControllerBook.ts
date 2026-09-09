import { type Request, type Response } from "express";
import { type Book, type Saga } from "../Models/Book.ts";
import dates from '../dates.json' with { type: 'json' };
import ResponseHTTP from "../ResponseHTTP.ts";

const GET_sagasList = (req: Request, res: Response): Response | void => {
    try {
        const { name = "" } = req.query;

        let listSagas: Saga[] = dates.books;

        if (name) listSagas = listSagas.filter(s => s.name.toLowerCase().startsWith(String(name).toLowerCase()));

        if (listSagas.length > 0) {
            const responseAPI = new ResponseHTTP(true, "Sagas successfully listed", listSagas);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI);

        } else {
            const responseAPI = new ResponseHTTP(true, "No saga matching the specified criteria was found", []);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI);
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of sagas", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
}

const GET_booksList = (req: Request, res: Response): Response | void => {
    try {
        const { saga = "" } = req.query;

        let listBooks: Saga[] = dates.books;

        if (saga) listBooks = listBooks.filter(b => b.name.toLowerCase().startsWith(String(saga).toLowerCase()));

        if (listBooks.length > 0) {
            const responseAPI = new ResponseHTTP(true, "Books successfully listed", listBooks);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI);

        } else {
            const responseAPI = new ResponseHTTP(true, "No book matching the specified criteria was found", []);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI);
        }

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of books", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

const GET_saga = (req: Request, res: Response): Response | void => {
    try {
        const { name = "" } = req.params;

        const listBooks: Saga[] = dates.books;
        let sagaFound: Saga | undefined | null = null;

        if (!name) {
            const responseAPI = new ResponseHTTP(false, "Saga name parameter not provided");
            responseAPI.showMessage();
            return res.status(400).json(responseAPI);
        };

        sagaFound = listBooks.find(s => s.name.toLowerCase().startsWith(String(name).toLowerCase()));

        if (sagaFound) {
            const responseAPI = new ResponseHTTP(true, "Saga successfully listed", sagaFound);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI);

        } else {
            const responseAPI = new ResponseHTTP(true, "No saga matching the specified name was found", null);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI);
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of saga", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

const GET_book = (req: Request, res: Response): Response | void => {
    try {
        const { title = "" } = req.params;

        const listSagas: Saga[] = dates.books;
        let listBooks: Book[] = [];
        let bookFound: Book | undefined | null = null;

        listSagas.forEach(s => listBooks = [...listBooks, ...s.books]);

        if (!title) {
            const responseAPI = new ResponseHTTP(false, "Book title parameter not provided");
            responseAPI.showMessage();
            return res.status(400).json(responseAPI);
        };

        bookFound = listBooks.find(b => b.title.toLowerCase().startsWith(String(title).toLowerCase()));

        if (bookFound) {
            const responseAPI = new ResponseHTTP(true, "Book successfully listed", bookFound);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI);

        } else {
            const responseAPI = new ResponseHTTP(true, "No book matching the specified title was found", null);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI);
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of book", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

export { GET_booksList, GET_sagasList, GET_saga, GET_book };