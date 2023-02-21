import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const App = () => {
    const [values, setValues] = useState({
        fullName:'',
        username:'',
        email:'',
        password:''
    })

    function handleFullNameChange(event) {
        event.persist();
	      setValues((values) => ({
            ...values,
            fullName: event.target.value,
	    }));
    }

    function handleUsernameChange(event) {
        event.persist();
	      setValues((values) => ({
            ...values,
            username: event.target.value,
	    }));
    }

    function handleEmailChange(event) {
        event.persist();
	      setValues((values) => ({
            ...values,
            email: event.target.value,
	    }));
    }

    function handlePasswordChange(event) {
        event.persist();
	    setValues((values) => ({
            ...values,
            password: event.target.value,
	    }));
    }

    function onSubmit(event){
        event.preventDefault()

        const registered = {
            fullName: values.fullName,
            username: values.username,
            email: values.email,
            password: values.password
        }

        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))

        setValues({
            fullName:"",
            username:'',
            email:'',
            password:''
        })
    }
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={onSubmit} >
                            <input 
                            id= 'fullName'
                            type = 'text'
                            placeholder='Full Name'
                            onChange={handleFullNameChange}
                            value={values.fullName}
                            className='form-control form-group'
                            />

                            <input 
                            id = 'Username'
                            type = 'text'
                            placeholder='Username'
                            onChange={handleUsernameChange}
                            value={values.username}
                            className='form-control form-group'
                            />

                            <input 
                            id = 'Email'
                            type = 'text'
                            placeholder='Email'
                            onChange={handleEmailChange}
                            value={values.email}
                            className='form-control form-group'
                            />

                            <input 
                            id = 'password'
                            type = 'password'
                            placeholder='Password'
                            onChange={handlePasswordChange}
                            value={values.password}
                            className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
export default App;