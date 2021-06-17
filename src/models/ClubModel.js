const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken")

const ClubSchema = new Schema({
    club_name: {
        type: String,
        required:true,
        trim: true,
        unique: true,
        lowercase: true
    },
    club_manager: {
        type: Object,
        required: true,
    },
    club_stadium: {
        type: String,
        required: true,
        trim: true
    },
    number_of_players: {
        type: Number,
        required: true,
        default: 0,
        trim: true
    },
    club_captain: {
        type: String,
        required: true,
        trim: true
    },
    club_alias: {
        type: String,
        required: true,
        trim: true
    },
    date_founded: {
        type: String,
        required: true,
        trim: true
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]
})

ClubSchema.methods.generateToken = async function () {
    const club = this;
  
    const token = jwt.sign({ _id: club._id.toString() }, process.env.JWT_SECRET);
    club.tokens = club.tokens.concat({ token });
  
    await club.save();
  
    return token;
  };

const Club = model("Club", ClubSchema)

module.exports = Club;