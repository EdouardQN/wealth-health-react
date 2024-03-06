import { useState, useEffect } from 'react';
import { db } from "./db";

export async function AddEmployee(data) {
  try {
    await db.employees.add({
      data
    });
  } catch (error) {
    console.error(`Failed to add ${data}: ${error}`);
  }
}


export function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const fetchData = async () => {
    const employeesData = await db.employees.toArray();
    console.log("données db chargées : ", employeesData)
    setEmployees(employeesData);
  };

  useEffect(() => {
    fetchData();
  }, []);  

  return   employees ;
}

export function DeleteEmployee(id){
  db.employees
    .where("id").equals(id)
    .delete()
    // .then(function (deleteCount) {
    //   console.log( "Deleted " + deleteCount + " objects");
    // });
    
  
}
