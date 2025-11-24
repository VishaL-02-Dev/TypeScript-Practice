import { IInventory } from "../interfaces/inventory";
import { InventoryRepository } from "../repositories/inventoryRepository";

export class InventoryService{
    constructor(private repository: InventoryRepository){}

    async addItem(item:IInventory){
        if(item.quantity<0) throw new Error("Quantity must be positive");
        return await this.repository.create(item);
    }

    async getAllItems(){
        return await this.repository.findAll();
    }

    async getItem(id: string){
        return await this.repository.findById(id);
    }

    async updateItem(id:string, item:IInventory){
        return await this.repository.update(id,item);
    }

    async deleteItem(id:string){
        return await this.repository.delete(id);
    }
}