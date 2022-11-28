import React from "react";
import './Styles.css';
import { Link } from "react-router-dom";
import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@mui/material';

export default function Contact() {
    return (
        <React.Fragment>
            <AppBar position="fixed" sx={{ alignItems: "center", justifyContent: "center" }}>
                <Toolbar>
                    <ButtonGroup className="MenuButtons" variant="contained" aria-label="Menu" disableElevation>
                        <Link className="Links" to="/">
                            <Button>Home</Button>
                        </Link>

                        <Link className="Links" to="/works">
                            <Button>Works</Button>
                        </Link>

                        <Link className="Links" to="/contact">
                            <Button>Contact</Button>
                        </Link>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
            
            {/* Content starts here */}
            <h1>Contact Information</h1>
            <br />
        </React.Fragment>
    );
};

