import { useState, useEffect, useCallback } from 'react';
import { Task } from '../types';
import { fetchTasks, createTask, updateTask, deleteTask } from '../services/taskService';
import { TASK_MESSAGES } from '../config/constants';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTasks = useCallback(async () => {
    setIsLoading(true);
    try {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
      setError(null);
    } catch (err) {
      setError(TASK_MESSAGES.LOAD_ERROR);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const handleCreateTask = async (title: string) => {
    try {
      const newTask = await createTask(title);
      setTasks(prevTasks => [...prevTasks, newTask]);
      return true;
    } catch (err) {
      setError(TASK_MESSAGES.CREATE_ERROR);
      console.error(err);
      return false;
    }
  };

  const handleToggleComplete = async (taskId: number) => {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    if (!taskToUpdate) return;

    try {
      const updatedTask = await updateTask(taskId, {
        completed: !taskToUpdate.completed
      });
      
      setTasks(prevTasks => 
        prevTasks.map(task => task.id === taskId ? updatedTask : task)
      );
    } catch (err) {
      setError(TASK_MESSAGES.UPDATE_ERROR);
      console.error(err);
    }
  };

  const handleDeleteTask = async (taskId: number) => {
    try {
      await deleteTask(taskId);
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    } catch (err) {
      setError(TASK_MESSAGES.DELETE_ERROR);
      console.error(err);
    }
  };

  const stats = {
    completedTasks: tasks.filter(task => task.completed).length,
    totalTasks: tasks.length
  };

  return {
    tasks,
    isLoading,
    error,
    stats,
    handleCreateTask,
    handleToggleComplete,
    handleDeleteTask
  };
};