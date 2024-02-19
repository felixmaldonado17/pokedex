import axios, { AxiosError } from "axios";
import { ENV  } from "../env";

/**
 * FIXME Currently doesn't exist an error standard structure in backend
 */
export type ApiError = {
  message: string;
};

const client = axios.create({
  baseURL: ENV,
});

client.interceptors.response.use(
  (r: any) => r,
  (error: AxiosError) => {
    if (error.isAxiosError) {
      const isARequestError = error.request && !error.response;

      if (isARequestError) {
        throw new Error("common.bad_internet_connection_error");
      }

      const isAnInternalServerError = error.response && error.response.status >= 500;

      if (isAnInternalServerError) {
        throw new Error("common.internal_server_error");
      }

      
    }

    throw error;
  },
);

export const baseApi = client;