import mongoose from "mongoose";
import dotenv from  "dotenv";

dotenv.config();

export class Database{
    static async connect() : Promise<void>{
        const uri = process.env.DB_URI;

        if(!uri){
            console.error("URI missinig in .env");
            process.exit(1);
        }

        try{
            await mongoose.connect(uri);
            console.log("DB connected");
        }catch(error){
            console.log(error);
            process.exit(1);
        }
    }
}