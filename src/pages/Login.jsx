import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {login,reset} from '../features/auth/authSlice'
import { toast } from 'react-toastify'

import './Login.css'
import Button from '../components/Button'



const Login = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user,isError,isSuccess,message } = useSelector((state)=> state.user)



    const [text,setText] = useState({
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
            email: text.email,
            password: text.password
        }
        console.log(userdata)
        dispatch(login(userdata))
    }

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }

        if(user || isSuccess){
            navigate('/dashboard')
        }

        dispatch(reset())
    },[user,isError,isSuccess,navigate,message,dispatch])



  return (
    <div className='login-container'>
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <div className='login-form-heading'>
                    <h2>Login</h2>
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
                    <p>New here ? <span><Link to='/register' className='link-text'>Register Now</Link></span>.</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login