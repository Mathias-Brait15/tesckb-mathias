const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const router = require("./routers/index");
const { errHandler } = require("./middlewares/errHandler");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
app.use(errHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
