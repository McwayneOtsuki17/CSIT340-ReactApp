import React from "react";
import './Styles.css';
import { Link } from "react-router-dom";
import { AppBar, Box, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './Works';

export default function Works() {
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
            <Box sx={{ alignItems: 'center', justifyContent: 'center' }}>

                <Grid rowSpacing={2} columnSpacing={{ xs: 5, sm: 5, md: 5 }} container >
                    <Grid item container >
                        <Card sx={{ maxWidth: 345, m: 5 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/images/ColorSequence.jpg"
                                alt="tennocon"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Color Sequence</Typography>
                                <Typography variant="body2" color="text.secondary" align="justify">
                                    A Color Sequence mini-game using React JavaScript TypeScript where the player needs to find and guess the sequence of 9 different colors. The colors are always randomized on page load, when refreshed, or when the player completes the succession.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="play/pause">
                                    <Link className="Links" to="/colorsequence">
                                        <PlayArrowIcon sx={{ height: 38, width: 38, color: "#2C2C2C" }} />
                                    </Link>
                                </IconButton>
                                <Button size="small" sx={{ marginTop: -1, p: 2 }}>Play</Button>
                            </CardActions>
                        </Card>

                    </Grid>
                </Grid>
            </Box>
            <br />
        </React.Fragment>
    );
};

