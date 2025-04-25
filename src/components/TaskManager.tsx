import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { useTasks } from '../hooks/useTasks';
import { TASK_MESSAGES, APP_TEXTS } from '../config/constants';

const TaskManager: React.FC = () => {
  const {
    tasks,
    isLoading,
    error,
    stats,
    handleCreateTask,
    handleToggleComplete,
    handleDeleteTask
  } = useTasks();

  return (
    <div className="card animate-fade-in">
      {error && (
        <div className="mb-6 p-4 bg-error-50 text-error-700 rounded-md">
          {error}
        </div>
      )}
      
      <div className="mb-8">
        <TaskForm onCreateTask={handleCreateTask} />
      </div>
      
      {stats.totalTasks > 0 && (
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">{TASK_MESSAGES.TASKS_TITLE}</h2>
          <div className="text-sm font-medium text-gray-600">
            {stats.completedTasks} {TASK_MESSAGES.TASKS_COMPLETED} {stats.totalTasks} {TASK_MESSAGES.TASKS_COMPLETED_SUFFIX}
          </div>
        </div>
      )}
      
      {isLoading ? (
        <div className="py-8 text-center text-gray-500">
          {TASK_MESSAGES.LOADING}
        </div>
      ) : tasks.length === 0 ? (
        <div className="py-10 text-center text-gray-500">
          <p className="mb-2 text-xl">{TASK_MESSAGES.NO_TASKS}</p>
          <p>{TASK_MESSAGES.ADD_NEW}</p>
        </div>
      ) : (
        <TaskList 
          tasks={tasks} 
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
        />
      )}
    </div>
  );
};

export default TaskManager;