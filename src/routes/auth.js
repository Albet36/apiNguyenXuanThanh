 
import express from 'express';
const router = express.Router();
import { login, register }  from "../controllers/auth.js";



//REGISTER
router.post("/register", register);

//LOGIN

router.post('/login', login);

export default router;
