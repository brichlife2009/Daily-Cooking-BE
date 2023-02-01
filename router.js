import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "API",
    data: {
      version: `1.0`,
    },
  });
});

router.use("/login", () => {});

export default router;
