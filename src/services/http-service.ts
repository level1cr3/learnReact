import apiClient from "./api-client";

class HttpService {
  constructor(private readonly _endpoint: string) {}

  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this._endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  delete(id: number) {
    return apiClient.delete(`${this._endpoint}/${id}`);
  }

  create<T>(entity: T) {
    return apiClient.post(this._endpoint, entity);
  }

  update<T extends { id: number }>(entity: T) {
    return apiClient.patch(`${this._endpoint}/${entity.id}`, entity);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
