import { Router } from "express";
import { InventoryController } from "../controllers/inventoryController";
import { InventoryService } from "../services/inventoruyServices";
import { InventoryRepository } from "../repositories/inventoryRepository";

const router = Router();

const repository = new InventoryRepository();
const service = new InventoryService(repository);
const controller = new InventoryController(service);

router.get("/",controller.home);
router.get("/create",controller.createPage);
router.post("/create",controller.create);
router.get("/edit/:id",controller.editPage);
router.post("/update/:id",controller.update);
router.get("/delete/:id",controller.delete);

export default router;