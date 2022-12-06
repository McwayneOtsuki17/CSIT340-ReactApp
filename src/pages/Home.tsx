import React from "react";
import { Typography } from '@mui/material';
import NavBar from "../components/NavBar";
import clip from '../assets/occo.mp4';

export default function Home() {
    return (
        <React.Fragment>
            <NavBar />

            {/* Content starts here */}
            
            <video autoPlay loop muted height={750}>
                <source src={clip} type='video/mp4' />
            </video>
            <br />
            
        </React.Fragment>
    );
};

