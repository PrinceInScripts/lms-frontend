import axios from "axios"

const BASE_URl="https://localhost:5000/api/v1"
const axiosInstance=axios.create()

axiosInstance.defaults.baseURL=BASE_URl
axiosInstance.defaults.timeout=2500

export default axiosInstance;