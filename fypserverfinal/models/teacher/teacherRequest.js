const mongoose = require("mongoose");

const teacherServiceRequestSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TeacherRequest",
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  course: {
    type: String,
  },
  price: {
    type: Number,
  },
  about: {
    type: String,
  },
  timing: {
    type: String,
  },
  address: {
    type: String,
  },
  educationDetail: {
    type: String,
  },
  pptFile: {
    type: String,
  },
  photo: {
    type: String,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  materials: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Material",
    },
  ],
});

const TeacherServiceRequest = mongoose.model(
  "TeacherServiceRequest",
  teacherServiceRequestSchema
);

module.exports = TeacherServiceRequest;
