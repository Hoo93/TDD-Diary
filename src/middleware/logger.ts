import { NextFunction, Request, Response } from "express";

export function loggerMiddleWare(req:Request,res:Response,next:NextFunction) {
    console.log(`${req.method} ${req.path}` )
    next();
}