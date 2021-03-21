import axios from "axios";

axios.create();
axios.defaults.baseURL = env.API_LOCAL_ENDPOINT;

export default axios;