

const BASE_URl="https://localhost:5014/api/v1"
const axiosInstance=axios.create()

axiosInstance.defaults.baseURL=BASE_URl
axiosInstance.defaults.timeout=2500

export default axiosInstance;