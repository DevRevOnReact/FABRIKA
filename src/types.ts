export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskUpdateData {
  title?: string;
  completed?: boolean;
}