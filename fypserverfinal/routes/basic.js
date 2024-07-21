const express = require("express");

const path = require("path");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User/UserLogin");
const Teacher = require("../models/User/Teacher.js/TeacherLogin");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");

const auth = require("../middlewares/auth");
const stripe = require("stripe")(
  "sk_test_51Og5cTJ7pz3TsDzfIWpcaLz5zF1CIvNufxvxC95qYeu9Ay34G5eCeD4OyEJi64I4ple15BNiVrEElqmCEaefvYpE00xAtRInFM"
);

const Stripe = require("stripe");
const Course = require("../models/Admin/Addcourse");
const TeacherServiceRequest = require("../models/teacher/teacherRequest");

cloudinary.config({
  cloud_name: "dmyrbutlu",
  api_key: "234937942539642",
  api_secret: "_Ap3aiSN-NBZ2xt3x4Mm9w4yBoo",
});
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, ${Date.now()}_${path.extname(file.originalname)});
//   },
// });

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

router.post("/register", upload.single("photo"), async (req, res) => {
  // console.log(req.file);
  const nameing = req.body.nameing;
  const email = req.body.email;
  const about = req.body.about;
  const interestedSubjects = req.body.interestedSubjects;

  const password = req.body.password;
  const cpassword = req.body.cpassword;
  const photo = req.body.photo;
  // const photo = req.file.filename;
  try {
    let user1 = await User.create({
      nameing: nameing,
      about: about,
      photo: photo,
      email: email,
      interestedSubjects: interestedSubjects,
      password: password,
      cpassword: cpassword,
    });

    console.log("usernkn", user1);
    // const token = req.cookies.jwtoken;
    // res.send({ status: "ok", token });
    const token = await user1.generateAuthToken();
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 4567890),
      httpOnly: true,
    });
    res.send({ token });
  } catch (error) {
    res.json({ status: error });
  }
});
// router.get("/user/:userId", async (req, res) => {
//   const userId = req.params.userId;
//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ error: "plx fill the data" });
    }
    const user = await User.findOne({ email: email });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      const token = await user.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 4567890),
        httpOnly: true,
      });
      console.log(token);
      const temp = {
        nameing: user.nameing,
        email: user.email,
        interestedSubjects: user.interestedSubjects,
        photo: user.photo,

        _id: user._id,
      };
      if (temp) {
        res.send(temp);
      }

      if (!isMatch) {
        return res.json({ error: "invalid credeintals" });
      } else {
        return res.json({ messege: "sigin successfully" });
      }
    }
  } catch (error) {
    // return res.status(400).json({error})
    console.log(error);
  }
});
router.get("/about", auth, (req, res) => {
  console.log("nnknkmnknnknkl");
  res.send(req.rootUser);
});
// router.get('/logout',(req,res)=>{
//   res.clearCookie('jwtoken',{path:"/"})
//   console.log("nnknkmnknnknkl")
//   res.send("userlogout")
// })
router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" }); // Clear the cookie named 'jwtoken'
  console.log("Cookie cleared successfully");
  res.send("userlogout");
});

router.get("/getallteacher", async (req, res) => {
  try {
    const booking = await Teacher.find();
    res.send(booking);
  } catch (err) {
    return res.status(400).json({ err });
  }
});

//1
// router.post("/create-payment-intent/:price", async (req, res) => {
//   try {
//     const { price } = req.params;
//     const amount = parseInt(price); // Ensure the amount is in the correct format
//     if (isNaN(amount) || amount <= 0) {
//       return res.status(400).json({ error: "Invalid amount" });
//     }

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: "usd",
//       payment_method_types: ["card"],
//     });

//     const clientSecret = paymentIntent.client_secret;

//     res.json({
//       clientSecret,
//     });
//   } catch (e) {
//     console.error(e.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });
//2
// router.post("/create-payment-intent", async (req, res) => {
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: 1099, //lowest denomination of particular currency
//       currency: "usd",
//       payment_method_types: ["card"], //by default
//     });

//     const clientSecret = paymentIntent.client_secret;
// console.log("backenddone")
//     res.json({
//       clientSecret: clientSecret,
//     });
//     console.log("backenddone")
//   } catch (e) {
//     console.log(e.message,"backend");
//     res.json({ error: e.message });
//   }
// });
router.post(
  "/create-payment-intent/:userId/:teacherId/:price",
  async (req, res) => {
    try {
      const { userId, teacherId, price } = req.params;

      // Create the payment intent with the amount
      const paymentIntent = await stripe.paymentIntents.create({
        amount: price * 100, // Amount should be in the lowest denomination (paisa)
        currency: "PKR",
        payment_method_types: ["card"],
      });

      const clientSecret = paymentIntent.client_secret;

      // Update user's payment status to 'done'
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { paymentStatus: "done" },
        { new: true }
      );

      // Add the user to the teacher's service request
      const updatedTeacherServiceRequest =
        await TeacherServiceRequest.findByIdAndUpdate(
          teacherId,
          { $push: { users: userId } },
          { new: true }
        );

      // Push the particular course to user's courses array
      await User.findByIdAndUpdate(userId, { $push: { courses: teacherId } });

      res.json({
        clientSecret,
        updatedUser,
        updatedTeacherServiceRequest,
      });
    } catch (e) {
      console.error(e.message);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

router.get("/enrolled-courses/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params; // Teacher Service Request ID

    const serviceRequest = await User.findById(studentId).populate("courses");

    if (!serviceRequest) {
      return res.status(404).json({ error: "Service request not found" });
    }

    const enrolledUsers = serviceRequest.courses;

    res.status(200).json({ enrolledUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// router.get("/users-with-payment-done", async (req, res) => {
//   try {
//     // Find all users with paymentDone set to true
//     const users = await User.find({ paymentStatus: "done" });

//     // Send the list of users back to the client
//     res.json(users);
//   } catch (error) {
//     console.log(error.message, "backend");
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
// new added

// get single course
// router.get("/user/:userId/course/:courseId", async (req, res) => {
//   const userId = req.params.userId;
//   const courseId = req.params.courseId;
//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     const course = await Course.findById(courseId);
//     if (!course) {
//       return res.status(404).json({ error: "Course not found" });
//     }

//     const isEnrolled = user.courses.includes(courseId);
//     if (!isEnrolled) {
//       return res
//         .status(404)
//         .json({ error: "User is not enrolled in this course" });
//     }

//     if (user.paymentStatus !== "done") {
//       return res
//         .status(404)
//         .json({ error: "Payment for this course is pending" });
//     }
//     res.json(course);
//   } catch (error) {
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// // Add couse
// router.post("/user/:userId/add-course", async (req, res) => {
//   const userId = req.params.userId;
//   const courseId = req.body.courseId;
//   const courseName = req.body.courseName;

//   try {
//     if (!courseId || !courseName) {
//       return res
//         .status(400)
//         .json({ error: "Course ID and name are required." });
//     }

//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ error: "User not found." });
//     }

//     user.courses.push({ courseId, courseName });
//     await user.save();

//     res.status(201).json({ message: "Course added successfully.", user });
//   } catch (error) {
//     console.error("Error adding course:", error);
//     res.status(500).json({ error: "Internal server error." });
//   }
// });

// // Get All courses
// router.get("/user/:userId/courses", async (req, res) => {
//   const userId = req.params.userId;

//   try {
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ error: "User not found." });
//     }

//     res.status(200).json({ courses: user.courses });
//   } catch (error) {
//     console.error("Error fetching user's courses:", error);
//     res.status(500).json({ error: "Internal server error." });
//   }
// });

// // Get single Course
// router.get("/user/:userId/courses/:courseId", async (req, res) => {
//   const userId = req.params.userId;
//   const courseId = req.params.courseId;

//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: "User not found." });
//     }

//     const course = user.courses.find(
//       (course) => course._id.toString() === courseId
//     );
//     if (!course) {
//       return res.status(404).json({ error: "Course not found." });
//     }

//     res.status(200).json({ course });
//   } catch (error) {
//     console.error("Error fetching course:", error);
//     res.status(500).json({ error: "Internal server error." });
//   }
// });
// Add fav course
// router.post("/user/addfavcourse/:userId/:courseId", async (req, res) => {
//   const userId = req.params.userId;
//   const courseId = req.params.courseId;
//   // const courseId = req.body.courseId;
//   // const courseName = req.body.courseName;
//   console.log("courseId:", courseId);
// // console.log("course.courseId:", course.courseId);
//   // console.log(courseName,'courseName')
//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     // Check if the course is already added to favorites
//     const existingCourse = user.favCourses.find(course => course.courseId  === courseId );
//     if (existingCourse) {
//       return res.status(400).json({ error: "Course already added to favorites" });
//     }
//     // Push the new course to favCourses array
//     user.favCourses.push({ courseId });
//     await user.save();
//     res.json(user);
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

module.exports = router;
