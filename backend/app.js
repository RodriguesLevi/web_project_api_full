import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/users.js";
import cardsRouter from "./routes/cards.js";

const app = express();
const port = 3000;

async function connectDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/aroundb", {});
    console.log("Database connect !");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    process.exit(1);
  }
}
connectDatabase();

app.use((req, res, next) => {
  req.user = {
    _id: "679ce63509046fb9a76fc43a", // cole o _id do usuário teste criado no passo anterior
  };

  next();
});

function logger(req, res, next) {
  console.log(
    `${new Intl.DateTimeFormat("pt-BR").format(Date.now())}- ${req.method} - ${
      req.url
    }`,
  );
  next();
}

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/users", userRouter);
app.use("/cards", cardsRouter);

app.listen(port, () => {
  console.log(`Sever running on http://localhost:${port}`);
});
