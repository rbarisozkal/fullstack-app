import express, { Express, Request, Response } from "express";
import cors from "cors";
import productRouter from "./routes/products/route";
const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/api/products',productRouter)
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from Flink!" });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
