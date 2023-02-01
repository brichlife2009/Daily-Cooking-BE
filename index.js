import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.get("*", function (req, res, next) {
  const err = new Error("Page Not Found");
  err.statusCode = 404;
  next(err);
});

app.listen(3001, () => console.log("App started on port 3001"));
