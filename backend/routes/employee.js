const express = require('express');
const Employee = require('../models/employee');
const router = express.Router();

// Create an employee
router.post('/employees', async (req, res) => {
  const { name, company, mobileNo } = req.body;
  try {
    const newEmployee = new Employee({ name, company, mobileNo });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all employees
router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an employee
router.put('/employees/:id', async (req, res) => {
  const { id } = req.params;
  const { name, company, mobileNo } = req.body;
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, { name, company, mobileNo }, { new: true });
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an employee
router.delete('/employees/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
