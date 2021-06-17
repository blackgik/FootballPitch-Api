const { Schema, model } = require("mongoose");

const PlayerSchema = new Schema({
  player_name: {
    type: String,
    required: true,
    trim: true,
  },
  player_age: {
    type: Number,
    required: true,
    trim: true,
  },
  player_position: {
    type: String,
    required: true,
    trim: true,
  },
  player_number: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  club: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const Player = model("Player", PlayerSchema);

module.exports = Player;
