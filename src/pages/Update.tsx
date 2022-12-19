import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Update() {
    let navigate = useNavigate();
    const [id, setID] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID') as string);
        setTitle(localStorage.getItem('First Name') as string);
        setDescription(localStorage.getItem('Last Name') as string);
    }, []);

    const updateAPIData = () => {
        axios.put(`https://639e84093542a261305cf005.mockapi.io/fakeData/${id}`, {
            title,
            description
        }).then(() => {
            navigate('/works')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}