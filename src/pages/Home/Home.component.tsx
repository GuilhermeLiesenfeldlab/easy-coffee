import React from 'react'

import * as UserService from '../../services/Users'
import Button from '../../components/atoms/Button'
import Container from '../../components/atoms/Container'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/Typography'
import Input from '../../components/atoms/Input'


const Home = () => {
  const handleSubmit = (cpf:string) => {
    UserService.getByCpf(cpf)
    .then((response)) => {
       console.log(response)
    })
  }

  return (
    <Container fullHeight
      fullCentered>
      <Paper>
        <Typography> Bem-vindo! </Typography>
        <Input
          type='text'
        />
        <br/>
        <Button
          type='button'
          onClick={()=> handleSubmit('04118036037')}
        >
          Login
        </Button>
    
      </Paper>
    </Container>
  )}

export default Home