import api from "./api";

export const getHomeData = async () => {
  const response = await api.get("web/home");
  return response.data;
};
