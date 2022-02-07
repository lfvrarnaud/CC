import axios from "axios";
axios.defaults.withCredentials = true;

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const createCharacter = async (data) => {
  return await axios.post(`${API_URL}/character`, data);
};

export const updateCharacter = async (data, id) => {
  return await axios.put(`${API_URL}/character/${id}`, data);
};

export const deleteCharacter = async (id) => {
  return await axios.delete(`${API_URL}/character/${id}`);
};

export const fetchCharacterById = async (user_id, id) => {
  return (await axios(`${API_URL}/character/${user_id}/${id}`)).data;
};

export const fetchAllCharacterById = async (user_id, id) => {
  return (await axios(`${API_URL}/character/${user_id}`)).data;
};

export const createUser = async (data) => {
  return (await axios.post(`${API_URL}/register`, data)).data;
};

export const fetchLogin = async (data) => {
  return (await axios.post(`${API_URL}/login`, data)).data;
};

export const fetchMe = async () => {
  return (await axios.get(`${API_URL}/me`)).data;
};
