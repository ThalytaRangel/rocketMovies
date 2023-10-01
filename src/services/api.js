import axios from "axios";

export const api = axios.create({
  baseURL: "https://movienotes-api-4kkg.onrender.com"
});