import mongoose, {Schema} from "mongoose";
import { IInventory }  from "../interfaces/inventory";

const inventorySchema  = new Schema <IInventory>({
    name: {type: String, required:true},
    quantity: {type: Number, required:true},
    price: {type: Number, required:true}
});

export const inventoryModel = mongoose.model<IInventory>(
    "Inventory",
    inventorySchema
);