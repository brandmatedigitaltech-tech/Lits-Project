const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Lead = require("./models/Lead");

const app = express();

// ✅ MIDDLEWARE
app.use(cors());
app.use(express.json());

// ✅ CONNECT MONGODB
mongoose.connect("mongodb://127.0.0.1:27017/lits")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

/* ============================
   ✅ ENROLL API (SAVE STUDENT)
============================ */
app.post("/api/enroll", async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    const newLead = new Lead({
      name,
      email,
      phone,
      course,
      message,
    });

    await newLead.save();

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ============================
   ✅ SIGNUP API (NEW USER)
============================ */
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // 🔍 check existing user
    const existing = await Lead.findOne({ email });

    if (existing) {
      return res.json({
        success: false,
        message: "User already exists ❌",
      });
    }

    // ✅ save new user
    const newUser = new Lead({
      name,
      email,
      password,
    });

    await newUser.save();

    res.json({
      success: true,
      message: "Signup successful ✅",
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ============================
   ✅ LOGIN API (ADMIN + STUDENT)
============================ */

// 🔹 ADMIN (hardcoded)
const admin = {
  email: "admin@gmail.com",
  password: "123456",
};

app.post("/api/login", async (req, res) => {
  const { email, password, role } = req.body;

  try {

    // ✅ ADMIN LOGIN
    if (role === "admin") {
      if (email === admin.email && password === admin.password) {
        return res.json({
          success: true,
          role: "admin",
          user: { email },
        });
      } else {
        return res.json({
          success: false,
          message: "Admin login failed ❌",
        });
      }
    }

    // ✅ STUDENT LOGIN
    const student = await Lead.findOne({ email });

    if (!student) {
      return res.json({
        success: false,
        message: "Student not found ❌",
      });
    }

    // ✅ PASSWORD CHECK (IMPORTANT 🔥)
    if (!student.password || student.password !== password) {
      return res.json({
        success: false,
        message: "Wrong password ❌",
      });
    }

    return res.json({
      success: true,
      role: "student",
      user: student,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ============================
   ✅ GET ALL STUDENTS (ADMIN PANEL)
============================ */
app.get("/api/students", async (req, res) => {
  try {
    const students = await Lead.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ============================
   🚀 START SERVER
============================ */
app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});