import axios, { AxiosInstance } from "axios";
import { useMutation, useQuery } from "react-query";
import { QueryCache } from "react-query";

interface ApiConfig {
  baseURL: string;
}

class Api {
  private client: AxiosInstance;

  constructor(config: ApiConfig) {
    this.client = axios.create({
      baseURL: config.baseURL,
    });
  }

  public get(path: string) {
    // const { data } = await this.client.get(path);
    // return data;
    return axios.get(path);
  }

  public async post(path: string, data: any) {
    const { data: responseData } = await this.client.post(path, data);
    return responseData;
  }

  public async put(path: string, data: any) {
    const { data: responseData } = await this.client.put(path, data);
    return responseData;
  }

  public async delete(path: string) {
    const { data: responseData } = await this.client.delete(path);
    return responseData;
  }
}

export const _api = new Api({
  baseURL: "http://localhost:3000/api",
});

export function useApiGet(path: string, api: Api) {
  return useQuery(path, async () => {
    const { data } = await api.get(path);
    return data;
  });
}

export function useApiPost(path: string, api: Api) {
  return useMutation(async (data: any) => {
    const { data: responseData } = await api.post(path, data);
    return responseData;
  });
}

export function useApiPut(path: string, api: Api) {
  return useMutation(async (data: any) => {
    const { data: responseData } = await api.put(path, data);
    return responseData;
  });
}

export function useApiDelete(path: string, api: Api) {
  return useMutation(async (id: number) => {
    const { data: responseData } = await api.delete(`${path}/${id}`);
    return responseData;
  });
}
