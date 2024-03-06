import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {DataGrid, GridActionsCellItem} from '@mui/x-data-grid';
import CustomNoRowsOverlay from './NoDataGrid';

import Box from '@mui/material/Box';
//Library used : https://mui.com

import { EmployeeList, DeleteEmployee } from '../data/actionsDB';


const GridEmployees = () => {

  const employeesD  = EmployeeList();
  // console.log("employee db", employeesD);

  const employees = employeesD.map((item) => ({
    id: item.id,
    FirstName: item.data.FirstName,
    LastName: item.data.LastName,
    StartDate: item.data.StartDate,
    Department: item.data.Department,
    DateOfBirth: item.data.DateOfBirth,
    Street: item.data.Street,
    City: item.data.City,
    State: item.data.State,
    ZipCode: item.data.ZipCode,
  }))
  // console.log("employee ", employees);

  const handleDeleteClick = (id) => {
    DeleteEmployee(id);
    window.location.reload();
  };

  const colData = [
    {
      headerClassName: 'super-app-theme--header',
      width:140,
      field:'FirstName'},
    {
      headerClassName: 'super-app-theme--header',
      width:140,
      field:'LastName'},
    {
      headerClassName: 'super-app-theme--header',
      width:140,
      field:'StartDate'},
    {
      headerClassName: 'super-app-theme--header',
      width:140,
      field:'Department'},
    {
      headerClassName: 'super-app-theme--header',
      width:140,
      field:'DateOfBirth'},
    {
      headerClassName: 'super-app-theme--header',
      width:140,
      field:'Street'},
    {
      headerClassName: 'super-app-theme--header',
      width:140,
      field:'City'},
    {
      headerClassName: 'super-app-theme--header',
      width:140,
      field:'State'},
    {
      headerClassName: 'super-app-theme--header',
      width:140,
      field:'ZipCode'},
    {
      field: 'Delete',
      type: 'actions',
      width: 50,
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },  
  ];

  return (

    <>
      <Box
        sx={{
          height: 300,
          width: '100%',
        }}
      >
        <div className='data-grid-container' style={{ width: '90%' }}>
          <div style={{ height: 400, width: '100%' }}>
            {employeesD  ? (
              <DataGrid disableRowSelectionOnClick
                sx={{
                  boxShadow: 2,
                  border: 5,
                  borderColor: '#307470',
                  '& .MuiDataGrid-row:hover': {
                    backgroundColor: '#307470',
                  },
                }}
                autoHeight={true} 
                columns={colData} 
                rows={employees} 
              />
            ) : (
              <DataGrid 
                sx={{
                  boxShadow: 2,
                  border: 5,
                  borderColor: '#307470',
                  '& .MuiDataGrid-row:hover': {
                    backgroundColor: '#307470',
                  },
                }}
                autoHeight={true} 
                columns={colData} 
                rows={[]}
                slots={{ noRowsOverlay: CustomNoRowsOverlay }}
                
              />
            )}
          </div>
        </div>
      </Box>
    </>

  );  
}

export default GridEmployees;