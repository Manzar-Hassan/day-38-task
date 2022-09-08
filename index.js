import express from "express";
import fs from "fs";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send(`App is working!!`);
});

app.get("/getDateTime", (req, res) => {
  const date = new Date().toDateString();
  const time = new Date().toTimeString();

  fs.writeFile(
    "./backend/date-time.txt",
    `Current Date - ${date} \n Current Time - ${time}`,
    (err) => {
      if (err) console.log(err);
    }
  );
  res.send(`Text File with time stamp created sucessfully!! ${date} ${time}`);
});

app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});
