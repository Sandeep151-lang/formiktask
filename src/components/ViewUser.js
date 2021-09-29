import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Card } from 'reactstrap'

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
            <h1 className=" text-dark text-center font-weight-bold container">Details</h1>
        </div>
        <div className="container" style={{ "width": "80%", "height": "70%" }}>
            <Card>
                <p className="font-weight-bold py-2 mx-3">First Name : <span className="text-center text-dark">{fname}</span></p>
                <p className="font-weight-bold py-2 mx-3">Last Name : <span className="text-dark">{lname}</span></p>
                <p className="font-weight-bold py-2 mx-3">Email_id : <span className="text-dark">{email_id}</span></p>
            </Card>
        </div>
    </>
}

export default User
