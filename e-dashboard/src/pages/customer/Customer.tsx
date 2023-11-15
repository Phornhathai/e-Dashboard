import { GridColDef } from "@mui/x-data-grid";
import "./customer.scss"
import { userRows } from "../../data";
import DataTable from "../../components/datatable/DataTable";
import { useState } from "react";
import Add from "../../components/add/Add";
import { Button } from "@mui/material";
import { ShoppingCartRounded } from "@mui/icons-material";


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Image',
    width: 90,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />
    }
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 100,
    type:"string",
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 100,
    type: "string",
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
    type: "string",
  },
  {
    field: 'totalsale',
    headerName: 'Total Sale',
    width: 90,
    type: "string",
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 100,
    type: "string",
  },
  
];


const Customer = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="customer">
        <div className="info">
        <h2>Customer</h2>
        <Button variant="contained" startIcon={<ShoppingCartRounded />} onClick={()=>setOpen(true)}>
        Add New User
        </Button>
        
        
      </div>
      <DataTable slug="customers" columns={columns} rows={userRows}/>
      {open && <Add slug="customer" columns={columns} setOpen={setOpen} /> }
    </div>
  )
}

export default Customer
