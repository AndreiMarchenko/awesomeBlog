import axios from "axios";

axios.create();
axios.defaults.baseURL = "http://backend.test:8888/api"

export default axios;