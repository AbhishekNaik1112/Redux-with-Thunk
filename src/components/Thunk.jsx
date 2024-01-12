import axios from "axios";
import { fetchDataSuccess, fetchDataFail } from "./Action";

export const fetchData = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      let users = res.data;
      console.log("Fetching Done",users)
      dispatch(fetchDataSuccess(users));
    })
    .catch((error) => {
    console.log("Fetching Failed")
    dispatch(fetchDataFail(error.message))});

};
