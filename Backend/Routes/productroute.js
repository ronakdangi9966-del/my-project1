import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import upload from "../middleware/multer.js";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../controllers/ProductController.js";

const router = express.Router();

router.post("/add", adminAuth, upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }, { name: "image4", maxCount: 1 }]), addProduct);
router.post("/remove", removeProduct);
router.post("/single", singleProduct);
router.get("/list", listProduct);

export default router;
