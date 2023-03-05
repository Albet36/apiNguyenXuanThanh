import{ createProduct, updateProduct, deleteProduct, getProduct, listProduct } from "../controllers/product.js";
import { verifyTokenAndAdmin } from "../middleware/middleware.js";



import express from "express"
const router = express.Router();

//CREATE

router.post("/", verifyTokenAndAdmin, createProduct);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateProduct);

//DELETE
router.delete("/:id", verifyTokenAndAdmin,deleteProduct);

//GET PRODUCT
router.get("/find/:id",getProduct);

//GET ALL PRODUCTS
router.get("/", listProduct);

export default router;
