import { createOrder, deleteOrder, getMonthlyIncome, getUserOrder, listOrder, updateOrder } from "../controllers/order.js";
import express from 'express';
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/middleware.js";

const router = express.Router();

//CREATE

router.post("/", verifyToken,createOrder);

//UPDATE
router.put("/:id", verifyTokenAndAdmin,updateOrder );

//DELETE
router.delete("/:id", verifyTokenAndAdmin,deleteOrder);

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization,getUserOrder);

// //GET ALL

router.get("/", verifyTokenAndAdmin,listOrder);

// GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin,getMonthlyIncome);

export default router;
