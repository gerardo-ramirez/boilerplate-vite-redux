import { createUser } from '@/redux/slices/userSlice';
import React from 'react'
import { useDispatch } from 'react-redux';
export const CreateButton = () => {

    const dispatch = useDispatch(); 
    const dispatchAction = ()=>{
        dispatch(createUser({ name: 'juan', id: '1' }));

    };
  return (
    <button onClick={dispatchAction}>Dispatch actions</button>
  )
}
