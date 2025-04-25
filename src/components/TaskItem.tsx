import React from 'react';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';
import { TaskItemProps } from '../types';
import { TASK_MESSAGES } from '../config/constants';

const TaskItem: React.FC<TaskItemProps> = ({ 
  task, 
  onToggleComplete,
  onDeleteTask 
}) => {
  return (
    <div 
      className={`p-4 border ${task.completed ? 'border-gray-200 bg-gray-50' : 'border-gray-200 bg-white'} 
        rounded-md shadow-sm hover:shadow-md transition-all duration-200 animate-slide-in flex justify-between items-center`}
    >
      <div className="flex items-center space-x-3 flex-1">
        <button
          onClick={() => onToggleComplete(task.id)}
          className="text-gray-500 hover:text-primary-600 transition-colors"
          aria-label={task.completed ? TASK_MESSAGES.MARK_INCOMPLETE : TASK_MESSAGES.MARK_COMPLETE}
        >
          {task.completed ? (
            <CheckCircle className="h-6 w-6 text-success-500" />
          ) : (
            <Circle className="h-6 w-6" />
          )}
        </button>
        
        <span 
          className={`flex-1 text-base ${task.completed 
            ? 'text-gray-500 line-through' 
            : 'text-gray-800'}`}
        >
          {task.title}
        </span>
      </div>
      
      <button
        onClick={() => onDeleteTask(task.id)}
        className="ml-2 text-gray-400 hover:text-error-500 transition-colors"
        aria-label={TASK_MESSAGES.DELETE_TASK}
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
};

export default TaskItem;