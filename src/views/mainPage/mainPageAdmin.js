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
                <p>¿Tienes un nuevo producto?, ¡Agregalo aca!</p>
                <Button variant="contained" onClick={subimit}>Nuevo prodcuto</Button>
            </div>
            <MainPage titulo="¡Bienvenido Admin!" />
        </>
    )
};
export default MainPageAdmin;