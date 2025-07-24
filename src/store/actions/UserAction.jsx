import axios from "../../api/axiosconfig";
import { loaduser, removeuser } from "../redusers/UserSlice";


export const asyncurrentuser = () => async (dispatch) => {
    try {

       const user =  JSON.parse(localStorage.getItem("users"));
       if(user) dispatch(loaduser(user));
       else console.error("user not logged in!");

    } catch (error) {
        console.error("Error: Could not Login user");
    }
}


export const asynclogoutuser = () => async (dispatch) => {
    try {
        localStorage.removeItem("users");
        dispatch(removeuser());
        // console.log("log out the user.");
    } catch (error) {
        console.error("Error: Could not log out user");
    }
}


export const asyncloginuser = (user) => async (dispatch, getstate) => {
    try {
        const {data} = await axios.get(
            `/users?email=${user.email}&pass=${user.pass}`
        );
        localStorage.setItem("users",JSON.stringify(data[0]));
        dispatch(asyncurrentuser());
    } catch (error) {
        console.error("Error: Could not Login user");
    }
}


export const asyncregisteruser = (user) => async (dispatch, getstate) => {
    try {
        const res = await axios.post("/users", user);  //post means data dalna and get means data lena;
        
    } catch (error) {
        console.error("Error: Could not register user");
    }
}
