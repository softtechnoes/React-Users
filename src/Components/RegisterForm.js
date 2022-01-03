import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import Register from './Register';

const RegisterForm = (props) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Rquired"),
	    email: Yup.string()
        .email("You have enter an invalid email address")
        .required("Rquired"),
    })
    return (
        <div className='form-wrapper'>
            <Formik {...props} validationSchema={validationSchema}>
                <Form className='mt-3'>
                    <FormGroup>
                        <Field name="name" type="text" className="form-control" />
                        <ErrorMessage name="name" className='d-block invalid-feedback' component="span" />
                    </FormGroup>
                    <FormGroup>
                        <Field name="email" type="text" className="form-control mt-3" />
                        <ErrorMessage name="email" className='d-block invalid-feedback' component="span" />
                    </FormGroup>

                    <Button className='mt-3' variant="danger" size="lg"
                        block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    )
}
export default RegisterForm;