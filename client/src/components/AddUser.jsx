import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material'
import React from 'react'

import { useState } from 'react'//using state

import { addUserApi } from '../service/api';//api integration

import { useNavigate } from 'react-router-dom';
//const navigate = useNavigate();
// navigate('/all');
const Container = styled(FormGroup)`
width:50%;
margin : 2% auto 0 auto;
font-size:3px;
padding:3px;
color:white;
border:2px outset grey;
box-shadow:0 0 12px grey;
& > div{
  margin-top:20px;
 }
`
const Ip = styled(InputLabel)`
font-weight:bolder;
padding:5px;
`
const Inp = styled(Input)`
color:white;

`
const Fc = styled(FormControl)`
color:white;
`
const defaultValue = {name: '', username: '', email: '', phone: ''};
const AddUser = () => {

  const [user, setUser] = useState(defaultValue);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });//[e.target.name]: e.target.value 
   }

  const addUserDetails = async () => {//called on button click
    await addUserApi(user);//success then go next line and navigate to server/all
    navigate('/all');
  }
 return (
    <Container>
      <Typography variant="h4" style={{color:'brown',fontWeight:'bolder',textAlign:'center'}}>Add User</Typography>
      <Fc>
        <Ip>Name</Ip>
        <Inp onChange={(e) => onValueChange(e)} name="name" />
      </Fc>
      <Fc>
        <Ip>Username</Ip>
        <Inp onChange={(e) => onValueChange(e)} name="username" />
      </Fc>
      <Fc>
        <Ip>Email</Ip>
        <Inp onChange={(e) => onValueChange(e)} name="email" />
      </Fc>
      <Fc>
        <Ip>Phone</Ip>
        <Inp onChange={(e) => onValueChange(e)} name="phone" />
      </Fc>
      <Fc>
        <Button variant="contained"  style={{color:'black',width:100,margin:'5px auto 5px auto',height:17,padding:5}}onClick={() => addUserDetails()}>Add</Button>
      </Fc>
    </Container>
  )
}

export default AddUser;