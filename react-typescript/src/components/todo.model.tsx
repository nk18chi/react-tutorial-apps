export interface TodosType {
  id: number;
  text: string;
}

export interface TodoListType {
  items: TodosType[];
  onDeleteTodo: (id: number) => void;
}
