import React from "react";

import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const MainPageAdmin = () => {
  const data = JSON.parse(localStorage.getItem("stock"));
  console.log(data);
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
  var idselection;
  function eliminar(id) {
    idselection = id;
  }
  function eliminacion() {
    var datos = JSON.parse(localStorage.getItem("stock"));
    console.log(datos);
    var index=[];
    datos.forEach(element => {
      idselection.forEach(element2 => {
        if(element.id===element2){
          index.push(datos.indexOf(element));
        }
      })
    });
    console.log(index);
    var ver=true;
    index.forEach(element => {
      if (ver === true) {
        datos.splice(element, 1);
        ver = false;
      }else{
        datos.splice(element-1, 1);
      }
    });
    localStorage.setItem("stock", JSON.stringify(datos));
    window.location.reload();
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
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          experimentalFeatures={{ newEditingApi: true }}
          onSelectionModelChange={itm => eliminar(itm)}
        />
        <Button variant="text" onClick={eliminacion}>Eliminar</Button>
      </div>
    </>
  );
};
export default MainPageAdmin;
