import { GridColDef } from "@mui/x-data-grid";
import "./customer.scss"
import { userRows } from "../../data";
import DataTable from "../../components/datatable/DataTable";

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
  return (
    <div className="customer">
        <div className="info">
        <h2>Customer</h2>
      </div>
      <DataTable columns={columns} rows={userRows}/>
    </div>
  )
}

export default Customer
