import logo from '/logo-name.svg'
import { useState, useEffect } from 'react'
//import  './Header.css'
import {styled} from 'styled-components'

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`


export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(()=>{
      const interval = setInterval(() => setNow(new Date()), 1000)

      return () =>{
        clearInterval(interval);
      }

  }, [])

  // setInterval(() => setNow(new Date()), 1000)


  return (
    <HeaderContainer>
      <img src={logo} alt={'Result'} />

      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  )
}


