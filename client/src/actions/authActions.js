//Import TEST_DISPATCH
import { TEST_DISPATCH } from './types.js';

//Register User
export const registerUser = (userData) => {
    return {
        type: TEST_DISPATCH,
        payload: userData 
    }
}
