import axios from "axios";
import { fetchCustomersAction } from "../store/customerReducer";

export const fetchCustomers = () => {
    return async (dispatch) => {
        await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => response.data)
            .then(response => dispatch(fetchCustomersAction(response)))
            .catch(error => {
                console.log(error);
            });
    }
}