import { Layout } from '@/styled-components'
import React, { useEffect } from 'react'
import { HomeTitle } from './style-components'
import { useDispatch } from 'react-redux'; 
import { createUser } from '@/redux/slices/userSlice';
import { CreateButton, ModifyButton, ResetButton } from './components';

function Home() {
 
  return (
    <Layout>
      <HomeTitle>
        Home abemus
      </HomeTitle>
      <CreateButton/>
      <ModifyButton/>
      <ResetButton/>
    </Layout>
  )
}

export default Home