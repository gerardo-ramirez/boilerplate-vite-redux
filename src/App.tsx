import { useState, useEffect } from 'react'
import './App.css'
import { Home } from '@/pages';
import { useSelector } from 'react-redux';
import { UserEmptyState } from './models';
import { AppStore } from './redux/store';


function App() {
 // const [user, setUser] = useState(UserEmptyState)
const userStore = useSelector((state: AppStore)=>state.user);



  return (
    <div className="App">
      {JSON.stringify(userStore)}
   <Home/>
    </div>
  )
}

export default App
