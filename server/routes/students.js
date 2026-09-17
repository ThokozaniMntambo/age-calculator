const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch students." });
  }
});

router.post("/", async (req, res) => {
  try {
    const { fullName, email, course } = req.body;
    if (!fullName || !email || !course) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const student = await Student.create({ fullName, email, course });
    return res.status(201).json(student);
  } catch (error) {
    return res.status(500).json({ message: "Failed to create student." });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { fullName, email, course } = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { fullName, email, course },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found." });
    }

    return res.json(updatedStudent);
  } catch (error) {
    return res.status(500).json({ message: "Failed to update student." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found." });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete student." });
  }
});

module.exports = router;
