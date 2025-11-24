import { Request, Response } from "express";
import { InventoryService } from "../services/inventoruyServices";

export class InventoryController{
    constructor(private service: InventoryService){}

    home = async(req: Request, res: Response)=>{
        const items = await this.service.getAllItems();
        res.render("index",{items});
    };

    create = async(req:Request,res:Response)=>{
        const item = await this.service.addItem(req.body);
        res.redirect("/");
    };

    editPage = async(req:Request, res:Response)=>{
        const item = await this.service.getItem(req.params.id);
        res.render("edit",{item});
    };

    update = async(req:Request, res:Response)=>{
        const item = await this.service.updateItem(req.params.id,req.body);
        res.redirect("/");
    };

    delete = async(req:Request, res:Response)=>{
        await this.service.deleteItem(req.params.id);
        res.redirect("/");
    };
}