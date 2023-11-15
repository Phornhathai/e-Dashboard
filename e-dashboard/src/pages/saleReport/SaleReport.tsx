import DataTable from "../../components/datatable/DataTable";
import { listOfSale } from "../../data";
import "./salereport.scss"
import {  GridColDef } from '@mui/x-data-grid';


const SaleReport = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'date',
      headerName: 'Sale Date',
      width: 140,
      type:"string",
    },
    {
      field: 'product',
      headerName: 'Product Name',
      width: 300,
      type:"string",
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 90,
      type: "string",
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 90,
      type: "string",
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 90,
      type: "string",
    },
    
  ];
  

  return (
    <div className="salereport">
        <h2>Sale Report</h2>
      <div className="info">
      <DataTable  slug="salereport" columns={columns} rows={listOfSale}/>
      </div>
    </div>
  )
}

export default SaleReport
