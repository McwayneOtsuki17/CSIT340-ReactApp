import React, { useState, useEffect } from 'react';
import '../App.css';
import '../pages/Styles.css';
import { Link, NavLink } from "react-router-dom";
import { AppBar, Button, ButtonGroup, CardMedia, Toolbar, styled } from '@mui/material';

export default function NavBar() {
    const appbarStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        marginLeft: 3,
        marginRight: 3,
        marginBottom: 10,
        marginTop: 4.5,
    }

    const StyledButtonGroup = styled(ButtonGroup)({
        '& .MuiButtonGroup-grouped': {
            color: '#2C2C2C',
            margin: 10,
            borderRadius: 100,
            width: 85,
            height: 85,
        }, '& .MuiButtonGroup-grouped:hover': {
            backgroundColor: '#1BB6F7',
        },
    });

    const logo = {
        marginLeft: 9,
        marginTop: 3,
        position: 'fixed',
        width: 120,
    }

    return (
        <React.Fragment>

            <AppBar position="fixed" sx={appbarStyle} elevation={0}>

                <Link className="Links" to="/">
                    <CardMedia sx={logo} component="img" image="/images/OCCO.png" />
                </Link>

                <Toolbar sx={{ flexDirection: 'row-reverse', }}>

                    <StyledButtonGroup className="MenuButtons" variant="text" disableElevation>

                        <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                            <Link className="Links" to="/">
                                <Button>Home</Button>
                            </Link>
                        </NavLink>

                        <NavLink to="/works" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                            <Link className="Links" to="/works">
                                <Button>Works</Button>
                            </Link>
                        </NavLink>

                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                            <Link className="Links" to="/contact">
                                <Button>Contact</Button>
                            </Link>
                        </NavLink>
                        
                    </StyledButtonGroup>

                </Toolbar>

            </AppBar>

        </React.Fragment>
    );
};

