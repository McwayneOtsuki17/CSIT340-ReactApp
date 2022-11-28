import React from "react";
import './Styles.css';
import { Link } from "react-router-dom";
import { AppBar, Box, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Toolbar, Typography, styled } from '@mui/material';
import './Works';

export default function Works() {
    const appbarStyle = {
        alignItems: "center",
        justifyContent: "center",
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
            <Box sx={{ alignItems: 'center', justifyContent: 'center' }}>

                <Grid rowSpacing={2} columnSpacing={{ xs: 5, sm: 5, md: 5 }} container >

                    <Grid item container >
                        <Card sx={{ maxWidth: 345, m: 5 }}>
                            <CardMedia
                                component="img"
                                width="140"
                                image="/images/medsight.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">MedSight</Typography>
                                <Typography variant="body2" color="text.secondary" align="justify">
                                    A Doctor-Patient appointment system using Python, Django, HTML, CSS, JS, Boostrap, and mySQL.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a className="Links" href="https://github.com/ivananoosGithub/AppDevProject-MedSight" target="_blank">
                                    <Button size="small" sx={{ marginTop: -1, p: 2 }}>View</Button>
                                </a>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345, m: 5 }}>
                            <CardMedia
                                component="img"
                                width="140"
                                image="/images/vorbestellan.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Vorbestellan</Typography>
                                <Typography variant="body2" color="text.secondary" align="justify">
                                    A Conference Room reservation system using Python, Django, HTML, CSS, JS, Boostrap, and mySQL.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a className="Links" href="https://github.com/McwayneOtsuki17/Vorbestellan" target="_blank">
                                    <Button size="small" sx={{ marginTop: -1, p: 2 }}>View</Button>
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <br />
        </React.Fragment>
    );
};

