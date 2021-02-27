const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({

    venueName: {
        type: String,
        trim: true,
        required: "Venue name is required"
    },

    genre: {
        type: String,
        trim: true,
        required: "Genre is required"
    },

    eventDate: {
        type: Date,
        required: "Date of event is required"
    },

    eventName: {
        type: String,
        trim: true,
        required: "Name of event is required"
    },

    eventType: {
        type: String,
        trim: true,
        required: "Type of event is required"
    },

    streetAddres: {
        type: String,
        trim: true,
        required: "Street address is required"
    },

    city: {
        type: String,
        trim: true,
        required: "City is required"
    },

    state: {
        type: String,
        trim: true,
        required: "State is required"
    },

    zipCode: {
        type: Number,
        trim: true,
        required: "Zip code is required"
    },

    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    }

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;