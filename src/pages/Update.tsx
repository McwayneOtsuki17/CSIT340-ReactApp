import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Title</label>
                    <input placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Link</label>
                    <input placeholder='URL' value={link} onChange={(e) => setLink(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                    <label>Image</label>
                    <input type="file" onChange={handleChange} /> <br />
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}