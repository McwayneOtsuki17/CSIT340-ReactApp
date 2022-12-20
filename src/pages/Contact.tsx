import React from "react";
import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import NavBar from "../components/NavBar";

export default function Contact() {
    return (
        <React.Fragment>
            <NavBar />

            {/* Content starts here */}
            <Box sx={{ marginTop: 20 }}>
                <Typography variant="h1">The Team</Typography>
                <Grid rowSpacing={2} columnSpacing={{ xs: 5, sm: 5, md: 5 }} container >

                    <Grid item container >

                        <Card sx={{ width: 345, m: 5 }} elevation={1}>
                            <CardContent>
                                <Avatar alt="Otsuki" src="/images/Otsuki_profile.jpg" sx={{ width: 100, height: 100, marginRight: "auto", marginLeft: "auto" }} />
                                <Typography gutterBottom variant="h5" component="div">McWayne Otsuki</Typography>
                                <Typography variant="body2" color="text.secondary" align="center">
                                    BSIT-IV
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a className="Links" href="https://github.com/McwayneOtsuki17" target="_blank">
                                    <Button size="small" sx={{ marginTop: -1, p: 2 }}>View</Button>
                                </a>
                            </CardActions>
                        </Card>

                        <Card sx={{ width: 345, m: 5 }}>                  
                            <CardContent>
                                <Avatar alt="Casia" src="/images/Casia_profile.png" sx={{ width: 100, height: 100, marginRight: "auto", marginLeft: "auto"  }} />
                                <Typography gutterBottom variant="h5" component="div">Franz Angelo Casia</Typography>
                                <Typography variant="body2" color="text.secondary" align="center">
                                    BSIT-IV
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a className="Links" href="https://github.com/franzcasia" target="_blank">
                                    <Button size="small" sx={{ marginTop: -1, p: 2 }}>View</Button>
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
            </Box>


        </React.Fragment>
    );
};

