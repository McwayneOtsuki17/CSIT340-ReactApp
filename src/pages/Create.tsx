import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, TextField } from '@mui/material';
import { Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Create() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [showModal, setShowModal] = useState(false);

    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            setImage(file);
        }
    };

    const postData = () => {
        axios.post('https://639e84093542a261305cf005.mockapi.io/fakeData', {
            title,
            description,
            link,
            image,
        })
            .then(() => {
                window.location.reload();
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <Button variant="contained" onClick={() => setShowModal(true)}>Add Project</Button>
            {showModal && (
                <div>
                    <Form style={{margin: 2, bgcolor: '#ddd'}}>
                        <Form.Field>
                            <TextField autoComplete='off' label='Title' onChange={(e) => setTitle(e.target.value)} required sx={{m:1}}/>
                        </Form.Field>
                        <Form.Field>
                            <TextField autoComplete='off' label='Description' onChange={(e) => setDescription(e.target.value)} required sx={{m:1}}/>
                        </Form.Field>
                        <Form.Field>
                            <TextField autoComplete='off' label='URL' onChange={(e) => setLink(e.target.value)} required sx={{m:1}}/>
                        </Form.Field>
                        <Form.Field>
                            <input onChange={handleFileSelect} type="file" /> <br />
                        </Form.Field>
                        <Button variant="contained" color="success" onClick={postData} type='submit' sx={{m:1}}>Save</Button>
                        <Button variant="contained" color="error" onClick={() => setShowModal(false)} sx={{m:1}}>Close</Button>
                    </Form>
                </div>
            )}
        </div>
    );
}
