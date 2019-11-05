import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-hooks-791ec.firebaseio.com"
});

export default instance;
