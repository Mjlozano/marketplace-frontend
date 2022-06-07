import React from "react";

import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import FullFeaturedCrudGrid from "../../components/table/productTable";

import MainPage from "./mainPage";

const MainPageAdmin = () => {
  const data = JSON.parse(localStorage.getItem("stock"));
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nombre del producto", width: 180, editable: true },
    { field: "price", headerName: "Precio", type: "number", width: 130, editable: true },
    {
      field: "category",
      headerName: "Categoria",
      width: 180,
      editable: true
    },
    {
      field: "description",
      headerName: "Descripcion",
      width: 300, 
      editable: true
    },
  ];

  function subimit() {
    window.location.href = "/new-product";
  }

  return (
    <>
      <div>
        <p>¿Tienes un nuevo producto?, ¡Agregalo acá!</p>
        <Button variant="contained" onClick={subimit}>
          Nuevo producto
        </Button>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        {/* <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          experimentalFeatures={{ newEditingApi: true }}
        /> */}
        <FullFeaturedCrudGrid />
      </div>
    </>
  );
};
export default MainPageAdmin;
