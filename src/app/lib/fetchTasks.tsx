import { apiBaseUrl } from "../constants/constants";
import { Task } from "../types/types";
import { apiTimeout, defaultHeaders } from "../constants/constants";

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await fetch(`${apiBaseUrl}/workspaces/tasks`, {
    method: "GET",
    headers: defaultHeaders,
  });
  return await response.json();
};

export const fetchTaskById = async (id: string): Promise<Task> => {
  const response = await fetch(`${apiBaseUrl}/workspaces/tasks/${id}`, {
    method: "GET",
    headers: defaultHeaders,
  });
  if (!response.ok) {
    throw new Error(`Task with ID ${id} not found`);
  }
  return await response.json();
};
