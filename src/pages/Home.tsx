import React from "react";
import { Typography } from '@mui/material';
import NavBar from "../components/NavBar";

export default function Home() {
    return (
        <React.Fragment>
            <NavBar></NavBar>

            {/* Content starts here */}
            <Typography variant="h1">Welcome!</Typography>

            <br />

        </React.Fragment>
    );
};

