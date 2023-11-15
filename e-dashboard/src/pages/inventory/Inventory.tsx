import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/datatable/DataTable";
import { products } from "../../data";
import "./inventory.scss"
import { Button } from "@mui/material";
import { ShoppingCartRounded } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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
    field: 'title',
    headerName: 'Title',
    width: 250,
    type: "string",
  },
  {
    field: 'color',
    headerName: 'Color',
    width: 90,
    type: "string",
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
    type: "string",
  },
  {
    field: 'producer',
    headerName: 'Producer',
    width: 100,
    type: "string",
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 100,
    type: "string",
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    width: 150,
    type: "boolean",
  },

];

const Inventory = () => {


  return (
    <div className="inventory">
      <div className="info">
        <h2>Inventory</h2>
        <Button variant="contained" startIcon={<ShoppingCartRounded />}>
          Add item
        </Button>
        <Button variant="contained"startIcon={<EditIcon />} >
          Edit item
        </Button>
        <Button variant="contained" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </div>
      <DataTable slug="inventories" columns={columns} rows={products} />

    </div>
  )
}

export default Inventory


