import { useState } from 'react';
import { useForm } from 'react-hook-form';
//Library used : https://react-hook-form.com/

import { ConfirmationModal } from "npm-modalconf-pkg"
//Plugin npm created

import { states } from '../data/states';
import { departments } from '../data/departments';
import { AddEmployee } from '../data/actionsDB';

export default function FormCreateEmployee() {
  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);  

  //submit form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) =>  {
    AddEmployee(data);
    handleOpen();
    reset();
  }
  
  return (
    <>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstname">Firstname</label>
        <input id='firstname' type="text" {...register("FirstName", {required: true, maxLength: 80})} />

        <label htmlFor="lastname">Lastname</label>
        <input id='lastname' type="text" {...register("LastName", {required: true, maxLength: 100})} />

        <label htmlFor="dateofbirth">Date of birth</label>
        <input id='dateofbirth' type="date" {...register("DateOfBirth", {})} />

        <label htmlFor="startdate">Start Date</label>
        <input id='startdate' type="date" {...register("StartDate", {})} />

        <label htmlFor="street">Street</label>
        <input id='street' type="text" {...register("Street", {})} />

        <label htmlFor="city">City</label>
        <input id='city' type="text" {...register("City", {})} />
    
        <select {...register("State")}>
          <option value="" defaultValue>----- STATE -----</option>
          {states.map(
            state => {return  <option key={state.abbreviation} value={state.name}>{state.name}</option>}
          )}
        </select>

        <label htmlFor="zip">Zip Code</label>
        <input id='zip' type="number" {...register("ZipCode", {})} />
        
        <select {...register("Department")}>
          <option value="" defaultValue>----- DEPARTMENT -----</option>
          {departments.map(
            department => {return  <option key={department} value={department}>{department}</option>}
          )}
        </select>

        <input type="submit"/>
      </form>
      <ConfirmationModal isOpen={open} onClose={handleClose} />
      
    </>
  
  );
}