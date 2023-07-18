import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable"
import { userRows } from "../../data";
import "./Users.scss"
import { GridColDef } from "@mui/x-data-grid"
import { useState } from "react"

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Avatar",
    width: 80,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 110,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 110,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 180,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 110,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];

const Users = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
     {open && <Add slug="users" columns={columns} setOpen={setOpen}/> }
  
    </div>
  )
}

export default Users