import express from "express";
const router = express.Router();

import { getAllUsers, putNewUser, 
    getSingleUser
} from "../controllers/Users.js";

router.get("/", getAllUsers);
router.post("/", putNewUser);
router.get("/:id", getSingleUser);

export default router;