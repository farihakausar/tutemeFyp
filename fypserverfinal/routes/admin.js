const express = require("express");
const router = express.Router();

const path = require("path");
const Course = require("../models/Admin/Addcourse");

router.post("/courses", async (req, res) => {
  try {
    const newCourse = new Course({
      photo: req.body.photo,
      courseName: req.body.courseName,
      courseDesc: req.body.courseDesc,
      videoURL: req.body.videoURL,
      pptFile: req.body.pptFile,
      language: req.body.language,
      tech: req.body.tech,
      tool: req.body.tool,
    });

    const savedCourse = await newCourse.save();

    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/courses/:roomid", async (req, res) => {
  // Extract the course ID from the request parameters
  const roomid = req.params.roomid;
  console.log(roomid, "nnkllk");
  try {
    const room = await Course.findOne({ _id: roomid });
    console.log(room, "done");

    if (!room) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/courses/:id", async (req, res) => {
  const roomid = req.params.id;
  console.log(roomid, "nnkllk");
  try {
    const room = await Course.findOne({ _id: id });
    console.log(room, "done");

    if (!room) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/getallcourses", async (req, res) => {
  try {
    const rooms = await Course.find({});
    res.send(rooms);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});
router.put("/courses/:roomid", async (req, res) => {
  const { roomid } = req.params;
  console.log(roomid, "mklmlm");
  const { photo, courseName, courseDesc, videoURL, pptFile, tech, tool } =
    req.body;

  try {
    const updatedRequest = await Course.findByIdAndUpdate(
      roomid,
      {
        photo,
        courseName,
        courseDesc,
        videoURL,
        pptFile,
        tech,
        tool,
      },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ message: "Teacher request not found" });
    }

    res.status(200).json({
      message: "course  updated successfully",
      request: updatedRequest,
    });
  } catch (error) {
    console.error("Error updating course request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
