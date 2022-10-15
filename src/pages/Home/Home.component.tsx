import React, {useState} from 'react'

import * as UserService from '../../services/Users'
import Button from '../../components/atoms/Button'
import Container from '../../components/atoms/Container'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/Typography'
import Input from '../../components/atoms/Input'
import { useUser } from '../../context/User'


const Home = () => {
  const {state, dispatch} = useUser()
  const [cpf, setCpf] = useState<string>('')
  console.log(state)
  const handleSubmit = (cpf: string) => {
    UserService.getByCpf(cpf)
      .then((response) => {
        dispatch({
          type: 'ADD_USER',
          payload: response,
        })
      })
  }

  return (
    <Container fullHeight
      fullCentered>
      <Paper>
        <Typography> Bem-vindo! </Typography>
        <Input
          type='text'
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
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