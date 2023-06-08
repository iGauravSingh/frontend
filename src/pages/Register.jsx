import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'


const Register = () => {

    const [text,setText] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e)=>{
        setText((prevstate)=> ({
            ...prevstate,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        const userdata = {
            name: text.name,
            email: text.email,
            password: text.password
        }
        console.log(userdata)
        // dispatch(login(userdata))
    }

  return (
    <div className='login-container'>
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <div className='login-form-heading'>
                    <h2>Register</h2>
                </div>
                <div className="input-container">
                    <label htmlFor='name'>Name </label>
                    <input value={text.name} id='name' type="text" name="name" required onChange={handleChange} />
                </div>
                <div className="input-container">
                    <label htmlFor='email'>Email </label>
                    <input value={text.email} id='email' type="text" name="email" required onChange={handleChange} />
                </div>
                <div className="input-container">
                    <label htmlFor='password'>Password </label>
                    <input value={text.password} id='password' type="password" name="password" required onChange={handleChange} />
                </div>
                <div className="button-container">
                    <div><Button type='submit'>Submit</Button></div>
                    <p>Already Registered ? <span><Link to='/login' className='link-text'>Login Now</Link></span>..</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register