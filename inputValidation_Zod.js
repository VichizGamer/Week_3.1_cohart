import express from "express";
import zod from "zod";

const app = express();
const port = 3000;
const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidney = req.body.kidney;
  const response = schema.safeParse(kidney);
  res.send({
    response,
  });
});

app.listen(port, () => {
  console.log(`Server is Listining on port ${port}`);
});
