import {  resetUser } from '@/redux/slices/userSlice';
import { useDispatch } from 'react-redux';
export const ResetButton = () => {

    const dispatch = useDispatch();
    const dispatchAction = () => {
        dispatch(resetUser());

    };
    return (
        <button onClick={dispatchAction}>Dispatch reset actions</button>
    )
}
