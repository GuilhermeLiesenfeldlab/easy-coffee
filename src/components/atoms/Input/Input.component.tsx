import React from 'react'
import Input from './Input.style'
import {StyledComponentPropsWithRef} from 'styled-components'

interface InputInterface extends StyledComponentPropsWithRef<typeof Input> {
  type: string
  name?: string
}

const InputComponent = ({
  type, 
  ...rest
}: InputInterface) => (
  <Input type={type} {...rest} />
)

export default InputComponent