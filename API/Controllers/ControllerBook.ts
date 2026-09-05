import { type Request, type Response } from "express";
import { type Book, type Saga } from "../Models/Book.ts";
import dates from '../dates.json' with { type: 'json' };

const GET_booksList = (req: Request, res: Response): Response | void => {
    try {
        const { saga="" } = req.query;
        
    } catch (error) {
        
    };
};

const GET_book = (req: Request, res: Response): Response | void => {
    try {
        const { name } = req.params;
        
    } catch (error) {
        
    };
};

export { GET_booksList, GET_book };