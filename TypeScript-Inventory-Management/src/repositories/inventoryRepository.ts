import { inventoryModel } from "../models/inventoryModel";
import { IInventory } from "../interfaces/inventory";

export class InventoryRepository{
    async create(item: IInventory){
        return await inventoryModel.create(item);
    }

    async findAll(){
        return await inventoryModel.find();
    }

    async findById(id:string){
        return await inventoryModel.findById(id);
    }

    async update(id:string, data: IInventory){
        return await inventoryModel.findByIdAndUpdate(id,data,{new:true});
    }

    async delete(id:string){
        return await inventoryModel.findByIdAndDelete(id);
    }
}