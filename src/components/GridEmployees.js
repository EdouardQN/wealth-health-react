import { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
//Library used : https://mui.com
import {EmployeeContext} from '../__context__/EmployeeContext';

const GridEmployees = () => {

  const employees = useContext(EmployeeContext);
  
  const colData = [
    {field:'FirstName'},
    {field:'LastName'},
    {field:'StartDate'},
    {field:'Department'},
    {field:'DateOfBirth'},
    {field:'Street'},
    {field:'City'},
    {field:'State'},
    {field:'ZipCode'},
  ];

  return (
    <div className='data-grid-container' style={{ width: '90%' }}>
      <div style={{ height: 350, width: '100%' }}>
        <DataGrid autoHeight={true} rows={employees} columns={colData} />
      </div>
    </div>
  );
  
}

export default GridEmployees;