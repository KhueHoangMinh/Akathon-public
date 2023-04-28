import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Leftside from './market-component/Leftside'
import Main from './market-component/Main'

function Market() {
  const user = useSelector(state=>state.auth.user)
  const navigate = useNavigate()
  useEffect(()=>{
    if(user == null) {
      navigate('/')
    }
  },[])
  return (
    <div>
        <MarketPage>
            <Leftside/>
            <Main user={user}/>
        </MarketPage>
    </div>
  )
}

const MarketPage = styled.div`
position: relative;
display: grid;
grid-template-columns: 1fr 4fr;
padding: 20px;
gap: 20px;
top: 80px;
background-image: radial-gradient(farthest-corner at 75% 70%, rgb(20,20,20), rgb(25,25,25));
min-height: calc(100vh - 80px);
height: fit-content;
color: rgb(230,230,230);
@media (max-width: 1200px) {
  display: flex;
  flex-direction: column;
}
`

export default Market