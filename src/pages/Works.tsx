import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import './Works';
import NavBar from "../components/NavBar";

export default function Works() {
    return (
        <React.Fragment>
            <NavBar/>

            {/* Content starts here */}
            <Box sx={{marginTop: 20}}>
            <Typography variant="h1">Our Works</Typography>
                <Grid rowSpacing={2} columnSpacing={{ xs: 5, sm: 5, md: 5 }} container >

                    <Grid item container >
                        <Card sx={{ maxWidth: 345, m: 5 }} elevation={1}>
                            <CardMedia component="img" width="140" image="/images/medsight.png" />
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
                            <CardMedia  component="img" width="140" image="/images/vorbestellan.png" />
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
                        <Card sx={{ maxWidth: 345, m: 5 }}>
                            <CardMedia  component="img" width="140" image="/images/wildcats flair logo.png" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Wildcats: FLAIR</Typography>
                                <Typography variant="body2" color="text.secondary" align="justify">
                                    Wildcats: FLAIR is a web application that allows students from CIT-University to fill up COVID Health Declaration Form online
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

