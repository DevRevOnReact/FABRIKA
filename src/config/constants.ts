export const API_BASE = '/tasks';

export const TASK_MESSAGES = {
  CREATE_ERROR: 'Не удалось создать задачу. Пожалуйста, попробуйте снова.',
  UPDATE_ERROR: 'Не удалось обновить задачу. Пожалуйста, попробуйте снова.',
  DELETE_ERROR: 'Не удалось удалить задачу. Пожалуйста, попробуйте снова.',
  LOAD_ERROR: 'Не удалось загрузить задачи. Пожалуйста, попробуйте позже.',
  
  NO_TASKS: 'Задач пока нет',
  ADD_NEW: 'Добавьте новую задачу, чтобы начать!',
  LOADING: 'Загрузка задач...',
  
  FORM_TITLE: 'Добавить новую задачу',
  TASK_TITLE_LABEL: 'Название задачи',
  TASK_TITLE_PLACEHOLDER: 'Что нужно сделать?',
  SUBMIT_BUTTON: 'Добавить задачу',
  SUBMITTING_BUTTON: 'Добавление...',
  TITLE_REQUIRED: 'Название задачи не может быть пустым',
  
  TASKS_TITLE: 'Ваши задачи',
  TASKS_COMPLETED: 'из',
  TASKS_COMPLETED_SUFFIX: 'выполнено',
  
  DELETE_CONFIRM: 'Вы уверены, что хотите удалить эту задачу?',
  
  MARK_COMPLETE: 'Отметить как выполненное',
  MARK_INCOMPLETE: 'Отметить как невыполненное',
  DELETE_TASK: 'Удалить задачу'
} as const;

export const APP_TEXTS = {
  TITLE: 'Менеджер задач',
} as const;