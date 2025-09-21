import express from "express";
import morgan from "morgan";
import contactsRouter from "./hw02-express/routes/contactsRouter.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/contacts", contactsRouter);

// 404
app.use((_req, res) => res.status(404).json({ message: "Not found" }));

// error handler
app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message || "Server error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`REST API on http://localhost:${PORT}`));
