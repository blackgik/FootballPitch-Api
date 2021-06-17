const { Schema, model } = require("mongoose");

const MatchScheduleSchema = new Schema({
  opponents: {
    type: Object,
    required: true,
  },
  scores: {
      type:Object,
      default: {
          teamA: 0,
          teamB: 0
      },
      required: true
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
  tokens: [{
      token: {
          type: String,
          required: true,
          trim: true
      }
  }]
});

MatchScheduleSchema.methods.generateToken = async function () {
    const matchScheduler = this;
  
    const token = jwt.sign({ _id: matchScheduler._id.toString() }, process.env.JWT_SECRET);
    matchScheduler.tokens = matchScheduler.tokens.concat({ token });
  
    await matchScheduler.save();
  
    return token;
  };

const MatchSchedule = model("MatchSchedule", MatchScheduleSchema);

module.exports = MatchSchedule;
