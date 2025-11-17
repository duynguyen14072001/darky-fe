import router from "@/routers";
import { STATUS_CODE_UNAUTHORIZED } from "@/shared/helpers/constants/codes";
import axios from "axios";
import type {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000, // 30s
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === STATUS_CODE_UNAUTHORIZED) {
      router.navigate("/login");
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
