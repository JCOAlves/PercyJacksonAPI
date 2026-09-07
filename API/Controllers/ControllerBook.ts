import { type Request, type Response } from "express";
import { type Book, type Saga } from "../Models/Book.ts";
import dates from '../dates.json' with { type: 'json' };
import ResponseHTTP from "../ResponseHTTP.ts";

const GET_booksList = (req: Request, res: Response): Response | void => {
    try {
        const { saga="" } = req.query;

        let listBooks: Saga[] = dates.books;

        //if(saga)



        const responseAPI = new ResponseHTTP(true, "Books successfully listed", { books: dates.books });
        responseAPI.showMessage();
        return res.status(200).json(responseAPI);
        
    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of books");
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

const GET_book = (req: Request, res: Response): Response | void => {
    try {
        const { name } = req.params;
        
    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of book");
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

export { GET_booksList, GET_book };