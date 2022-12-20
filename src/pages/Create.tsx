import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    }

    const postData = () => {
        axios.post(`https://639e84093542a261305cf005.mockapi.io/fakeData`, {
            title,
            description,
            link,
            image,
        }).then(() => {
            window.location.reload();
        })
    }


    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Title</label>
                    <input placeholder='Title' onChange={(e) => setTitle(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input placeholder='Description' onChange={(e) => setDescription(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                    <label>Link</label>
                    <input placeholder='URL' onChange={(e) => setLink(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                    <label>Image</label>
                    <input type="file" onChange={handleChange} /> <br />
                </Form.Field>
                <Button variant="contained" onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    );
}
