import {createGlobalStyle} from 'styled-components'
import coffeeBean from '../images/coffee-beans.svg'

import {colors} from '../variables'

const {brown} = colors


const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
  background-color: ${brown};
  background-image: url(${coffeeBean});
  background-size: 600px;
  height: 100vh;
  
}
`


export default GlobalStyle