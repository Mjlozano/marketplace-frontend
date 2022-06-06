import React, { useState } from "react";
import { Container, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, Input, Autocomplete } from "@mui/material";
import { Button } from "@mui/material";
import "./Prodcutstyle.css"
import products from "../../helpers/products";

const ProcutForm = () => {

    var id = 0;
    var categorias = [];
    fetch("https://api.mercadolibre.com/sites/MLA/categories").then((res) => res.json()).then((data) => {
        data.forEach(element => {
            categorias.push(element.name);
        });
    });



    products.forEach(element => {
        //console.log(element.category);
        if (!categorias.includes(element.category)) {
            categorias.push(element.category);
        }
        if (element.id > id) {
            id = element.id;
        }
    });

    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [link, setlink] = useState("");
    const [description, setdescription] = useState("");
    const [category, setcategory] = useState("");

    function handleChange() {
        id = id + 1;
        if (!localStorage.getItem("sotck")) {
            localStorage.setItem("sotck", JSON.stringify([]));
        } else {
            var stock = JSON.parse(localStorage.getItem("sotck"));
            stock.push({
                name: name,
                price: price,
                category: category,
                image: link,
                id: id,
                description: description
            });
            localStorage.setItem("sotck", JSON.stringify(stock));
        }
    }
    //console.log(categorias);

    return (
        <div>
            <h1>Product Form</h1>
            <Container sx={{ width: '50%' }} className="container">
                <div className="container-div">
                    <TextField sx={{
                        display: 'inline-flex',
                        flexWrap: 'wrap',
                        width: '45%'
                    }}
                        //value={name}
                        onChange={(e) => setname(e.target.value)}
                        id="standard-basic standard-size-normal " label="Nombre " variant="standard"

                    />

                    <FormControl sx={{
                        display: 'inline-flex',
                        flexWrap: 'wrap',
                        width: '45%',
                        ml: '10%'
                    }}
                        variant="standard">
                        <InputLabel >Precio</InputLabel>
                        <Input

                            margin="normal"
                            //id="standard-adornment-amount"
                            type="number"
                            //value={price}
                            onChange={(e) => setprice(e.target.value)}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                    <br />
                    <TextField
                        fullWidth
                        id="standard-basic standard-size-normal" label="Link" variant="standard"
                        placeholder="Ingresa el link de la imagen del producto"
                        //value={link}
                        onChange={(e) => setlink(e.target.value)}
                    />
                    <br />
                    <TextField
                        id="standard-multiline-static"
                        label="Descripcion"
                        multiline
                        rows={2}
                        placeholder="Ingresa una breve descripcion de tu producto"
                        variant="standard"
                        //value={description}
                        onChange={(e) => setdescription(e.target.value)}
                        fullWidth
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={categorias}

                        onChange={(event, value) => console.log(value)}
                        sx={{ width: '100%', mt: '10px' }}
                        renderInput={(params) => <TextField {...params} label="Categoria" />}
                    />
                    <Button
                        sx={{ mt: '20px', width: '50%' }}
                        variant="contained"
                        onClick={handleChange}
                        href="/admin"
                    >Enviar producto</Button>
                </div>
            </Container>
        </div>
    );
};
export default ProcutForm;