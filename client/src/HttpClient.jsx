// Import Axios
import axios from "axios";

// Create Axios instance with credentials enabled
const HttpClient = axios.create({
  withCredentials: true,
});

export default HttpClient;
