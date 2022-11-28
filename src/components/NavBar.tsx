import React from "react";
import '../pages/Styles.css';
import { Link } from "react-router-dom";
import { AppBar, Button, ButtonGroup, CardMedia, Toolbar, styled } from '@mui/material';

export default function NavBar() {
    const appbarStyle = {
        backgroundColor: '#FFFFFF',
        marginLeft: 3,
        marginRight: 3,
        marginBottom: 10,
        paddingTop: 5.5,
    }

    const StyledButtonGroup = styled(ButtonGroup)({
        '& .MuiButtonGroup-grouped': {
            color: "#2C2C2C",
            margin: 5,
        }, '& .MuiButtonGroup-grouped:hover': {
            backgroundColor: '#FFFFFF',
        },
    });

    const logo = {
        marginLeft: 9,
        marginTop: 1,
        position: 'fixed',
        width: 120,
    }

    return (
        <React.Fragment>

            <AppBar position="absolute" sx={appbarStyle} elevation={0}>
                <Link className="Links" to="/">
                    <CardMedia sx={logo} component="img" image="/images/OCCO.png" />
                </Link>
                <Toolbar sx={{ flexDirection: 'row-reverse', }}>
                    <StyledButtonGroup className="MenuButtons" variant="text" disableElevation>
                        <Link className="Links" to="/">
                            <Button>Home</Button>
                        </Link>

                        <Link className="Links" to="/works">
                            <Button>Our Works</Button>
                        </Link>

                        <Link className="Links" to="/contact">
                            <Button>Contact</Button>
                        </Link>
                    </StyledButtonGroup>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

