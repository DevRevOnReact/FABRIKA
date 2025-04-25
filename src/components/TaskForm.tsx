import React, { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { TaskFormProps } from '../types';
import { TASK_MESSAGES } from '../config/constants';

const TaskForm: React.FC<TaskFormProps> = ({ onCreateTask }) => {
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setError(TASK_MESSAGES.TITLE_REQUIRED);
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const success = await onCreateTask(trimmedTitle);
      if (success) {
        setTitle('');
      }
    } catch (err) {
      setError(TASK_MESSAGES.CREATE_ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">{TASK_MESSAGES.FORM_TITLE}</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="task-title" className="block text-sm font-medium text-gray-700 mb-1">
            {TASK_MESSAGES.TASK_TITLE_LABEL}
          </label>
          <input
            id="task-title"
            type="text"
            className="form-input"
            placeholder={TASK_MESSAGES.TASK_TITLE_PLACEHOLDER}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (error) setError(null);
            }}
            disabled={isSubmitting}
          />
          {error && <p className="mt-1 text-sm text-error-600">{error}</p>}
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="btn-primary flex items-center"
            disabled={isSubmitting}
          >
            <PlusCircleIcon className="h-5 w-5 mr-1" />
            {isSubmitting ? TASK_MESSAGES.SUBMITTING_BUTTON : TASK_MESSAGES.SUBMIT_BUTTON}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;