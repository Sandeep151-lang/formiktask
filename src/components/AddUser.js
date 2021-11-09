import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router';


export const AddUser = () => {
    const history = useHistory();

    const [initialValues, setinitialvalues] = useState({
        fname: '',
        lname: '',
        email_id: ''
    })

    //validation for adding users data 
    const validationSchema = Yup.object().shape({
        fname: Yup.string().min(3, 'Too Short!').max(30, 'Too Long!')
            .required('First Name is required'),
        lname: Yup.string().min(3, 'Too Short!').max(30, 'Too Long!')
            .required('Last Name is required'),
        email_id: Yup.string().matches(
            "^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$",
            "At least five alphanumeric characters and Must contain @gmail.com"
        )
            .email('Email is invalid')
            .required('Email is required'),
    });



    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema}
            onSubmit={async (values) => {
                // same shape as initial values

                // const post = await axios.post(`https://61485ca2035b3600175b9dc6.mockapi.io/api/v1/users`, values)
                const post = await axios.post(`/add-one-student`, values)

                setinitialvalues(post)
                history.push("/")
            }}>


            {({ errors, touched }) => {
                return (
                    <>
                        <div className="container text-center"><h1 className="font-weight-bold text-dark">AddUser</h1></div>
                        <Form className="ml-5">

                            <div className="form-row">

                                <div className="form-group col-5">
                                    <label>First Name</label>
                                    <Field name="fname" type="text" className={'form-control' + (errors.fname && touched.fname ? ' is-invalid' : '')} />
                                    <ErrorMessage name="fname" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group col-5">
                                    <label>Last Name</label>
                                    <Field name="lname" type="text" className={'form-control' + (errors.lname && touched.lname ? ' is-invalid' : '')} />
                                    <ErrorMessage name="lname" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-10">
                                    <label>Email</label>
                                    <Field name="email_id" type="text" className={'form-control' + (errors.email_id && touched.email_id ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email_id" component="div" className="invalid-feedback" />
                                </div>

                            </div>

                            <button className="btn btn-primary mr-2" type="submit">Submit</button>
                            <button className="btn btn-success mr-2" type="reset">Reset</button>
                        </Form>
                    </>
                );
            }}
        </Formik>

    );
}

