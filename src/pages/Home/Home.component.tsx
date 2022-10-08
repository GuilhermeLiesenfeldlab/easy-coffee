import React from 'react'
import Button from '../../components/atoms/Button'
import Container from '../../components/atoms/Container'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/Typography'
import Input from '../../components/atoms/Input'


const Home = () => (
  <Container fullHeight
    fullCentered>
    <Paper>
      <Typography> Bem-vindo! </Typography>
      <Input
        type='text'
      />
      <br/>
      <Button>
          Entrar
      </Button>
    
    </Paper>
  </Container>
)

export default Home