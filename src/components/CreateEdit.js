import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';
import { Form, FormGroup, Container } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Add User details component 
const CreateEdit = () => {

    const url = `https://61485ca2035b3600175b9dc6.mockapi.io/api/v1/users`;
    const history = useHistory();


    const [form_data, setform_data] = useState({
        fname: "",
        lname: " ",
        email_id: " "
    });

    //Submit Button function call 
    const submit = async (e) => {
        e.preventDefault();

        // condition if the data filled is empty it will show toaster
        if (form_data.fname && form_data.lname && form_data.email_id) {
            const post = await axios.post(url, form_data)
            setform_data(post.data);

            //history is use to navigate to userlist
            history.push("/")
        } else {
            //toaster 
            toast.error("Plz filled required data!", {
                autoClose: 5000,
            })


        }
    }

    // onchange function call of handlevent for form filling 
    const handlevent = (e) => {

        // targeting id from form 
        const name = e.target.id;

        //pushing the data 
        setform_data({ ...form_data, [name]: e.target.value });
    }

    return <>
        <div className="container text-center"><h1 className="font-weight-bold text-dark">Add User</h1></div>
        <Container className="themed-container" style={{ "width": "70%" }}>
            <Form method="POST">
                <FormGroup row className="py-3">
                    <TextField color="warning" id="fname" label="First name" type="text" variant="filled" name="fname" value={form_data.fname} onChange={handlevent} autoComplete="off" required />
                </FormGroup>
                <FormGroup row className="py-3">
                    <TextField color="warning" id="lname" label="Last name" type="text" variant="filled" name="lname" value={form_data.lname} onChange={handlevent} autoComplete="off" required />
                </FormGroup>
                <FormGroup row className="py-3">
                    <TextField color="warning" id="email_id" label="Email_id" type="email" variant="filled" name="email" value={form_data.email_id} onChange={handlevent} required />
                </FormGroup>
                <FormGroup row>
                    <Button className="mt-3 py-1" style={{ "width": "100%" }} variant="contained" onClick={(e) => submit(e)}>Submit</Button>
                </FormGroup>
                <ToastContainer />
            </Form>
        </Container>
    </>
}

export default CreateEdit
