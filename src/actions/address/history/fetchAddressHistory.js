import {ADDRESS_FETCH_HISTORY} from "../actions";
import cookie from 'react-cookies';

/**
 * Fetches the Address History
 * @returns {Function}
 */
export const fetchAddressHistory = () => dispatch => {
    let addrHistory = cookie.load("address/history") || [];
    addrHistory = addrHistory.slice(0, 4);

    dispatch({
        type: ADDRESS_FETCH_HISTORY,
        history: addrHistory
    });
};