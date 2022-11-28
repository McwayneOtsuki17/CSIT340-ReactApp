import React from "react";
import './Styles.css';
import { Link } from "react-router-dom";
import { AppBar, Button, ButtonGroup, Toolbar, Typography, styled } from '@mui/material';

export default function Contact() {
    const appbarStyle = {
        alignItems: "center",
        justifyContent: "center" ,
    }

    const StyledButtonGroup = styled(ButtonGroup)({
        '& .MuiButtonGroup-grouped': {
          color: "#FFFFFF",
          margin: 5,
        }
    });

    return (
        <React.Fragment>
            <AppBar position="fixed" sx={appbarStyle}>
                <Toolbar>
                    <StyledButtonGroup className="MenuButtons" variant="text" disableElevation>
                        <Link className="Links" to="/">
                            <Button>Home</Button>
                        </Link>

                        <Link className="Links" to="/works">
                            <Button>Works</Button>
                        </Link>

                        <Link className="Links" to="/contact">
                            <Button>Contact</Button>
                        </Link>
                    </StyledButtonGroup>
                </Toolbar>
            </AppBar>

            {/* Content starts here */}
            <Typography variant="h1">Contact Information</Typography>
            <br />
        </React.Fragment>
    );
};

