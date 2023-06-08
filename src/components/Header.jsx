import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Li = styled.li`
    list-style: none;
    cursor: pointer;
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0 50px;
    background-color: rgb(2, 43, 104);
    color: whitesmoke;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const Ul = styled.ul`
    display: flex;
    gap: 15px;
`
const Heading = styled.h5`
    font-family: cursive;
`


const Header = () => {
  return (
    <Container>
            <Heading><Link to = '/' style={{color: 'whitesmoke',textDecoration: 'none'}}>MT</Link></Heading>
            <Ul>
                <Li><Link to = '/' style={{color: 'whitesmoke',textDecoration: 'none'}}>Home</Link></Li>
                <Li><Link to = '/login' style={{color: 'whitesmoke',textDecoration: 'none'}}>Login</Link></Li> 
                <Li><Link to = '/dashboard' style={{color: 'whitesmoke',textDecoration: 'none'}}>Dashboard</Link></Li>
            </Ul>
        
    </Container>
  )
}

export default Header