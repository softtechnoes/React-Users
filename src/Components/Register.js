import React, {useState} from 'react';
import axios from 'axios';
import RegisterForm from './RegisterForm';

const Register = () => {
    const [formValues] = useState({
        name:'',
        email:'',
        password:''
    })
    const onSubmit = userObject => {
        console.log(userObject)
        axios.post('http://localhost:3001/register', userObject)
        .then( res => {
            if(res.status === 200){
                alert('Registration successfully');
            }else Promise.reject();
        }).catch(err => {
            alert('Something went wrong')
        })
    }

    return (
        <RegisterForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
            Register
        </RegisterForm>
    )
}
export default Register;