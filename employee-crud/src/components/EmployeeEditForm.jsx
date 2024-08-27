import React, { useState } from 'react';
import axios from 'axios';

const EmployeeEditForm = ({ employee, onEmployeeUpdated }) => {
  const [name, setName] = useState(employee.name);
  const [company, setCompany] = useState(employee.company);
  const [mobileNo, setMobileNo] = useState(employee.mobileNo);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedEmployee = await axios.put(`http://localhost:5000/api/employees/${employee._id}`, {
        name,
        company,
        mobileNo,
      });
      onEmployeeUpdated(updatedEmployee.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" required />
      <input value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} placeholder="Mobile No" required />
      <button type="submit">Update Employee</button>
    </form>
  );
};

export default EmployeeEditForm;
