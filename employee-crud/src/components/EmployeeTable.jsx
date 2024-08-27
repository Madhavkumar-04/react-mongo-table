import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeTable = ({ onEmployeeDeleted, onEmployeeSelected }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await axios.get('http://localhost:5000/api/employees');
      setEmployees(response.data);
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/employees/${id}`);
    onEmployeeDeleted(id);
    setEmployees(employees.filter((employee) => employee._id !== id));
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Mobile No</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee._id}>
            <td>{employee.name}</td>
            <td>{employee.company}</td>
            <td>{employee.mobileNo}</td>
            <td>
              <button onClick={() => onEmployeeSelected(employee)}>Edit</button>
              <button onClick={() => handleDelete(employee._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
