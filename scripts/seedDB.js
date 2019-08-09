const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/projects",{ useNewUrlParser: true }
);

const projectSeed = [
  {
    task: "Do this today",
    budget: "5.00",
    actualSpend: "0"
  },
  {
    task: "Do this today as well",
    budget: "6.00",
    actualSpend: "0"
  },
  {
    task: "Do this tomorrow",
    budget: "7.00",
    actualSpend: "0"
  },
  {
    task: "Do this tomorrow as well",
    budget: "9.00",
    actualSpend: "0"
  }
];

db.Project
  .deleteMany({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
