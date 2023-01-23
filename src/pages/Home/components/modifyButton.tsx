import { modifyUser } from '@/redux/slices/userSlice';
import React from 'react'
import { useDispatch } from 'react-redux';

export const ModifyButton = () => {
    const dispatch = useDispatch();
    const dispatchAction = () => {
        dispatch(modifyUser({ name: 'alan', id: '2' }));

    };
    return (
        <button onClick={dispatchAction}>Dispatch Modify</button>
    )
}
