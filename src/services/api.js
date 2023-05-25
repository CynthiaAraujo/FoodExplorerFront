import axios from "axios";

export const api = axios.create({
  baseURL: "https://backendfoodexplorer.onrender.com",
});

export const createPlate = async (data) => {
  const response = await api.post("/plates", data);
  return response.data;
};

export const deletePlate = async (id) => {
  const response = await api.delete(`/plates/${id}`);
  return response.data;
};

export const updatePlate = async (id, data) => {
  const response = await api.put(`/plates/${id}`, data);
  return response.data;
};

export const getPlates = async (title) => {
  const response = await api.get("/plates", { params: { title } });
  return response.data;
};

export const getPlateById = async (id) => {
  const response = await api.get(`/plates/${id}`);
  return response.data;
};
