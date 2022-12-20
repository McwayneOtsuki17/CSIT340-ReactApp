import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import { Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";

export default function Update() {
    let navigate = useNavigate();
    const [id, setID] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState({});

    useEffect(() => {
        setID(localStorage.getItem('ID') as string);
        setTitle(localStorage.getItem('Title') as string);
        setDescription(localStorage.getItem('Description') as string);
        setLink(localStorage.getItem('Link') as string);
        // setImage(localStorage.getItem('Image') as string);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    }

    const updateAPIData = () => {
        axios.put(`https://639e84093542a261305cf005.mockapi.io/fakeData/${id}`, {
            title,
            description,
            link,
            // image,
        }).then(() => {
            navigate('/works')
        })
    }
    return (
        <>
            <NavBar />
            <div>
                <Form style={{ margin: 2, bgcolor: '#ddd' }}>
                    <Form.Field>
                        <TextField autoComplete='off' value={title} onChange={(e) => setTitle(e.target.value)} sx={{ m: 1 }} />
                    </Form.Field>
                    <Form.Field>
                        <TextField autoComplete='off' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} sx={{ m: 1 }} />
                    </Form.Field>
                    <Form.Field>
                        <TextField autoComplete='off' placeholder='URL' value={link} onChange={(e) => setLink(e.target.value)} sx={{ m: 1 }} />
                    </Form.Field>
                    <Form.Field>
                        <input type="file" onChange={handleChange} /> <br />
                    </Form.Field>
                    <Button variant="contained" color="success" type='submit' onClick={updateAPIData} sx={{ m: 1 }}>Save</Button>
                </Form>
            </div>
        </>
    )
}