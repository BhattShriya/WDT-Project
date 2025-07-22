const mongoose = require("mongoose");

const freelancerSchema = new mongoose.Schema({
  name: String,
  email: String,
  nativePlace: String,
  phone: String,
  maritalStatus: String,
  currentLocation: String,
  city: String,
  state: String,
  country: String,
  experience: String,
  collegeName: String,
  collegeLocation: String,
  courseDetails: String,
  yearOfPassing: String,
  gender: String,
  skills: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Freelancer", freelancerSchema);
