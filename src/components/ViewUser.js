import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import axios from 'axios'
import { useParams } from "react-router-dom";

const User = () => {
    //use Params when user click particular data to fetch  details 
    const { id } = useParams();
    const [data, setdata] = useState({
        fname: "",
        lname: " ",
        email_id: " ",
        number: " "
    });


    //destructoring the data is use in useState
    const { fname, lname, email_id } = data;

    //getuser function call to fetch the data of particular user
    const getuser = async () => {
        try {
            const result = await axios.get(`https://61485ca2035b3600175b9dc6.mockapi.io/api/v1/users/${id}`);
            console.log(result.data)
            setdata(result.data)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getuser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <>
        <div>
            <h1>Details</h1>
        </div>
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email_id</th>

                    </tr>
                </thead>
                <tbody>

                    <tr >
                        <td>{id}</td>
                        <td>{fname}</td>
                        <td>{lname}</td>
                        <td>{email_id}</td>

                    </tr>

                </tbody>
            </Table>
        </div>
    </>
}

export default User
