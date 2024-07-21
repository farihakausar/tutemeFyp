// const express = require("express");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const app = express();

// const dbConfig = require("./db");
// const port = process.env.PORT || 5000;

// const Usermodel = require("./routes/basic");

// const Admin = require("./routes/admin");
// const teacherRequestRoutes = require("./routes/teacher");

// app.use(cors());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use(cors());
// app.use(cookieParser());

// app.use("/api/users", Usermodel);

// app.use("/api/teacher", teacherRequestRoutes);
// app.use("/api/admin", Admin);

// app.listen(5000, () => {
//   console.log(`serverr is lientimg to ${port} `);
// });
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const stripe = require("stripe")(
  "sk_test_51Og5cTJ7pz3TsDzfIWpcaLz5zF1CIvNufxvxC95qYeu9Ay34G5eCeD4OyEJi64I4ple15BNiVrEElqmCEaefvYpE00xAtRInFM"
);

const dbConfig = require("./db");
const port = process.env.PORT || 5000;

const Usermodel = require("./routes/basic");

const Admin = require("./routes/admin");
const teacherRequestRoutes = require("./routes/teacher");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
app.use(cookieParser());
app.use("/files", express.static("files"));

app.use("/api/users", Usermodel);
// app.use("/api/admin",Admin);
app.use("/api/teacher", teacherRequestRoutes);
app.use("/api/admin", Admin);
// app.use("/api/teacher",Teachermodel);
app.listen(5000, () => {
  console.log(`serverr is lientimg to ${port} `);
});
