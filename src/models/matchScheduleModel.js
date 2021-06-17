const { Schema, model } = require("mongoose");

const MatchScheduleSchema = new Schema({
  opponents: {
    type: Object,
    required: true,
  },
  date: {
    type: String,
    required: true,
    trim: true,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
  Status: {
    type: String,
    default: "pending",
    lowercase: true,
    trim: true,
    required: true,
  },
});

const MatchSchedule = model("MatchSchedule", MatchScheduleSchema);

module.exports = MatchSchedule;
