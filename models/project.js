const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  username:{ type: String, required: true },
  projectname:{ type: String, required: true },
  task: { type: String, required: true },
  budget: { type: Number, required: true },
  actualSpend: {type: Number, default:0},
  complete:{type:Boolean, default:false},
  created:{ type: Date, default: Date.now }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
