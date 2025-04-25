import { Task, TaskUpdateData } from '../types';

const API_BASE = '/tasks';

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }
  return response.json();
};

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await fetch(API_BASE);
  return handleResponse<Task[]>(response);
};

export const createTask = async (title: string): Promise<Task> => {
  const response = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });
  return handleResponse<Task>(response);
};

export const updateTask = async (id: number, data: TaskUpdateData): Promise<Task> => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse<Task>(response);
};

export const deleteTask = async (id: number): Promise<void> => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Failed to delete task: ${response.statusText}`);
  }
};