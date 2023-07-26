import { FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material';
import React from 'react';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 20px;
    }
`

const AddUser = () => {
  return (
    <>
    <Container>
        <Typography variant='h4'>Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input />
        </FormControl>
        <FormControl>
            <InputLabel>User-Name</InputLabel>
            <Input />
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input />
        </FormControl>
        <FormControl>
            <InputLabel>PhoneNo:.</InputLabel>
            <Input />
        </FormControl>
    </Container>
    </>
  )
}

export default AddUser;