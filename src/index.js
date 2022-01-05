import app from "./app.js";

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
