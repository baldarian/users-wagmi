import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in",
});

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

export async function fetchUsers() {
  const res = await api.get<{ data: User[] }>("/api/users?page=1");

  return res.data.data;
}

export async function fetchUser(id: string) {
  const res = await api.get<{ data: User }>(`/api/users/${id}`);

  return res.data.data;
}
