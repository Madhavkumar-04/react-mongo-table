import React, { useEffect, useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import EmployeeEditForm from './components/EmployeeEditForm';
import './App.css'
const App = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [added, setAdded] = useState(true)
  useEffect(()=>{},[added])
  const handleEmployeeAdded = (employee) => {
    console.log('Employee added:', employee);
  };

  const handleEmployeeUpdated = (updatedEmployee) => {
    console.log('Employee updated:', updatedEmployee);
    setSelectedEmployee(null);
  };

  const handleEmployeeDeleted = (id) => {
    console.log('Employee deleted:', id);
  };

  return (
    <div className='container'>
      <h1>Employee Management System</h1>
      {selectedEmployee ? (
        <EmployeeEditForm
          employee={selectedEmployee}
          onEmployeeUpdated={handleEmployeeUpdated}
        />
      ) : (
        <EmployeeForm onEmployeeAdded={handleEmployeeAdded} setAdded={setAdded}/>
      )}
      <EmployeeTable
        onEmployeeDeleted={handleEmployeeDeleted}
        onEmployeeSelected={setSelectedEmployee}
      />
    </div>
  );
};

export default App;
