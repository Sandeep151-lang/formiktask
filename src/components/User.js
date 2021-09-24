import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import axios from 'axios'
import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";


//User List components
const User = () => {

    const history = useHistory();
    const [data, setdata] = useState([]);
    const url = `https://61485ca2035b3600175b9dc6.mockapi.io/api/v1/users`;

    //fetch the data
    const userdata = async () => {
        try {
            const datas = await axios.get(url);
            setdata(datas.data);
        } catch (err) {
            console.log(err, "errr");
        }
    }

    //delete button use to call deletuser function to delete the data
    const deletuser = async (id) => {
        try {
            await axios.delete(`https://61485ca2035b3600175b9dc6.mockapi.io/api/v1/users/${id}`);
            userdata();
        } catch (err) {
            console.log(err)
        }
    }

    // edit button click to call edituser function and navigate to EdistUser component
    const edituser = (id) => {
        history.push(`/edit/${id}`);
    }

    // View button click to call viewUser function and navigate to ViewUser component
    const viewUser = (id) => {
        history.push(`/view/${id}`)
    }

    useEffect(() => {
        userdata();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <>
        <div>
            <h1>UserList</h1>
        </div>
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{item.id}</th>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>

                            <td ><Button variant="contained" onClick={(e) => viewUser(item.id)} >View</Button></td>
                            <td ><Button variant="contained" color="warning" onClick={(e) => deletuser(item.id)}>Delete</Button></td>
                            <td><Button variant="contained" color="success" onClick={(e) => edituser(item.id)}>Edit</Button></td>
                        </tr>
                    )
                    )}
                </tbody>
            </Table>
        </div>
    </>
}

export default User
