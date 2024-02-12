import { createContext } from "react"
import uuid from 'react-uuid';

const defaultData = [
  {
    id:uuid(), 
    FirstName:"Michel", 
    LastName:"Bojolé", 
    DateOfBirth:"11-17-2005", 
    StartDate:"10-01-2024", 
    Street:"6 mt Chimney", 
    City:"Cincinnati",
    State:"OH", 
    ZipCode:"3915000",
    Department:"Human Resources"
  },

  {
    id:uuid(), 
    FirstName:"Sullivan", 
    LastName:"Fisher", 
    DateOfBirth:"09-23-2001",
    StartDate:"23-08-2018", 
    Street:"12 path of Exile", 
    City:"Chicago", 
    State:"IL", 
    ZipCode:"17-14000",
    Department:"Legal" 
  },
];

export const EmployeeContext = createContext(defaultData);


