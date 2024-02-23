import { useGetToDoLists } from '@rad/infrastructure';

export function useToDoList() {
  const { data, isLoading } = useGetToDoLists();

  return { data, isLoading };
}
