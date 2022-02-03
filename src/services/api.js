import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const createCharacter = async (data) => {
  return await axios.post(`${API_URL}/character`, data);
};
