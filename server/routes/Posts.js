import express from "express";
const router = express.Router();

import {
  getQuestions,
  getQuestionById,
  postQuestion,
  updateQuestion,
  deleteQuestion,
  getAnswersByID,
} from "../controllers/Posts.js";

router.get("/", getQuestions);
router.get("/allPosts/:id", getAnswersByID);
router.get("/:id", getQuestionById);
router.post("/", postQuestion);
router.put("/:id", updateQuestion);
router.delete("/:id", deleteQuestion);

// module.exports = router;
export default router;
