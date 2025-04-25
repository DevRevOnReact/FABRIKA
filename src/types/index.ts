export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskUpdateData {
  title?: string;
  completed?: boolean;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export interface TaskFormProps {
  onCreateTask: (title: string) => Promise<boolean>;
}

export interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
}