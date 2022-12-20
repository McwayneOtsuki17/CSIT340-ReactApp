import axios from 'axios';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import './Works';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Read() {
    const navigate = useNavigate();
    interface APIData {
        id: string;
        title: string;
        description: string;
        link: string;
    }

    const [APIData, setAPIData] = useState<APIData[]>([]);

    useEffect(() => {
        axios.get(`https://639e84093542a261305cf005.mockapi.io/fakeData`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data: any) => {
        let { id, title, description, link } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Title', title);
        localStorage.setItem('Description', description);
        localStorage.setItem('Link', link);
        navigate('/update');
    }

    const getData = () => {
        axios.get(`https://639e84093542a261305cf005.mockapi.io/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id: any) => {
        axios.delete(`https://639e84093542a261305cf005.mockapi.io/fakeData/${id}`)
            .then(() => {
                getData();
            })
    }

    return (
        <>
        <Grid item container >
            {APIData.map((data) => {
                return (
                    
                        <Card sx={{ maxWidth: 345, m: 5 }}>
                            {/* <CardMedia component="img" width="140" image={data.image} /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">{data.title}</Typography>
                                <Typography variant="body2" color="text.secondary" align="justify">{data.description}</Typography>
                            </CardContent>
                            <CardActions>
                                <a className="Links" href={data.link} target="_blank" rel="noopener noreferrer">
                                    <Button size="small" sx={{ marginTop: -1, p: 2 }}>View</Button>
                                </a>
                            </CardActions>
                            <CardActions>
                                <Button onClick={() => setData(data)}>Update</Button>
                            </CardActions>
                            <CardActions>
                                <Button onClick={() => onDelete(data.id)}>Delete</Button>
                            </CardActions>
                        </Card>
                    
                )
            })}
            </Grid>
        </>
    )
}