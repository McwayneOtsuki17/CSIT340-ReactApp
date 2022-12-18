import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Update() {
    let navigate = useNavigate();
    const [id, setID] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID') as string);
        setFirstName(localStorage.getItem('First Name') as string);
        setLastName(localStorage.getItem('Last Name') as string);
    }, []);

    const updateAPIData = () => {
        axios.put(`https://639e84093542a261305cf005.mockapi.io/fakeData/${id}`, {
            firstName,
            lastName
        }).then(() => {
            // navigate('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}