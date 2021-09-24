import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@mui/material';
import { Col, Form, FormGroup, Container } from 'reactstrap';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';


//Edit user deatails components
const EditUser = () => {

    //use Params when user click particular data to fetch  edit the details 
    const { id } = useParams();
    const history = useHistory();
    const [form_data, setform_data] = useState({
        fname: "",
        lname: " ",
    });

    //submit button click to EditUser call function  to use put function
    const EditUser = async (e) => {
        e.preventDefault();

        const put = await axios.put(`https://61485ca2035b3600175b9dc6.mockapi.io/api/v1/users/${id}`, form_data);
        setform_data(put.data)

        //history is use to navigate to userlist
        history.push("/")
    }

    // onchange function call of handlevent  from form 
    const handlevent = (e) => {
        //
        const name = e.target.id;
        setform_data({ ...form_data, [name]: e.target.value });

    }

    //to fetch the userdetails loader function call
    const loaduser = async () => {
        await axios.get(`https://61485ca2035b3600175b9dc6.mockapi.io/api/v1/users/${id}`).then(resp => setform_data(resp.data))

    }


    useEffect(() => {
        loaduser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <>
        <div className="container bg-light"><h1>EditUser</h1></div>
        <Container className="themed-container">
            <Form method="POST">
                <FormGroup row className="py-5">
                    <Col sx={4}>
                        <TextField id="fname" label="First name" type="text" variant="filled" name="fname" value={form_data.fname} onChange={handlevent} autoComplete="off" required />
                    </Col>
                    <Col sx={4}>
                        <TextField id="lname" label="Last name" type="text" variant="filled" name="lname" value={form_data.lname} onChange={handlevent} required />
                    </Col>
                </FormGroup>
                <Button className="mb-5" variant="contained" onClick={(e) => EditUser(e)}>Submit</Button>
            </Form>
        </Container>
    </>
}

export default EditUser;
