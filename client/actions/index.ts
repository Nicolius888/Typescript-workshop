import axios from 'axios';
import { Dispatch } from 'redux';

const url = 'https://localhost:3001/user';

interface User {
	id: number;
	name: string;
	lastName: string;
}

export const fetchUsers = () => {
	return async (dispatch: Dispatch) => {
        const response = await axios.get<User[]>(url);
		dispatch({
			type: 'FETCH_USERS',
			payload: response.data,
		});
	};
};