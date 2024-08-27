import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = ({ onEmployeeAdded, setAdded}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/employees', { name, company, mobileNo });
      onEmployeeAdded(response.data);
      setName('');
      setCompany('');
      setMobileNo('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" required />
      <input value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} placeholder="Mobile No" required />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
