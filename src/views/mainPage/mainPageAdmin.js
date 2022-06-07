import React from 'react'

import { Button } from '@mui/material';

import MainPage from './mainPage';

const MainPageAdmin = () => {

    function subimit() {
        window.location.href = "/new-product";
    }

    return (
        <>
            <div>
                <p>¿Tienes un nuevo producto?, ¡Agregalo acá!</p>
                <Button variant="contained" onClick={subimit}>Nuevo producto</Button>
            </div>
            <MainPage titulo="¡Bienvenido Admin!" />
        </>
    )
};
export default MainPageAdmin;