import axios, { CanceledError, AxiosError } from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  //   headers: {"api-key":"ljflkajsd;lj;vaj;djfasdf"},
  // for some endpoints if in every request we need to send the key.
});

export { CanceledError, AxiosError };
