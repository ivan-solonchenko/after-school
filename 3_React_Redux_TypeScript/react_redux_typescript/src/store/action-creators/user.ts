import { UserAction, UserActionTypes } from "../../types/users";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS });
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setTimeout(() => {
                dispatch({ type: UserActionTypes.FETCH_USERS_SECCESS, payload: response.data });
            }, 500)
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Сталася помилка при завантаженні користувачів'
            });
        }
    };
};