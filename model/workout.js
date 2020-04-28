const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workOutSchema = new Schema({
    day:
    {
      type: Date,
      default: Date.now
    },
    exercises: {
        type:{
            type: String,
            trim: true,
            required: "What type of workout?"
        },
        name:{
            type: String,
            trim: true,
            required:"Name of Workout"
        },
        distance:{
            type:Number
        },
        weight:{
            type: Number
        },
        sets:{
            type: Number
        },
        reps:{
            type: Number
        },
        duration:{
            type:Number,
            required: "Duration of Workout"
        }
    }
});

const workout = mongoose.model("workout",workOutSchema);

module.exports = workout;