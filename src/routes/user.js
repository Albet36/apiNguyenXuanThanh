import { updateUser, deleteUser, getUser, listUser, getUserStar } from "../controllers/user.js";
import express from 'express';
import  { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/middleware.js";

const router = express.Router();

//UPDATE
router.put("/:id", verifyTokenAndAuthorization,updateUser);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization,deleteUser);

//GET USER
router.get("/find/:id", verifyTokenAndAdmin,getUser);

//GET ALL USER
router.get("/", verifyTokenAndAdmin,listUser);

//GET USER STATS

router.get("/stats", verifyTokenAndAdmin,getUserStar);

export default router;
