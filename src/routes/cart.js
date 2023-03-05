
import { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } from "../middleware/middleware.js";

import express from 'express';
import { createCart, deleteCart, getUserCart, listCart, updateCart } from "../controllers/cart.js";
const router = express.Router();

//CREATE

router.post("/", verifyToken,createCart);

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateCart);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization,deleteCart );

//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization,getUserCart);

// //GET ALL

router.get("/", verifyTokenAndAdmin, listCart);

export default router;
