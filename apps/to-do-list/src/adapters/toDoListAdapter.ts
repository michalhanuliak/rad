import {
  UpdateTaskMutationBody,
  getGetToDoListQueryKey,
  useCreateTask,
  useGetToDoList,
  useRemoveTask,
  useUpdateTask,
} from '@rad/infrastructure';
import { useQueryClient } from '@tanstack/react-query';

export function useToDoListAdapter(toDoListId: string) {
  const { data, isLoading, isFetching } = useGetToDoList(toDoListId);

  const tasks = data?.tasks ?? [];

  return { tasks, isLoading };
}

export function useCreateTaskAdapter(toDoListId: string) {
  const queryClient = useQueryClient();
  const queryKey = getGetToDoListQueryKey(toDoListId);

  const { mutate } = useCreateTask({
    mutation: {
      onMutate: async (newTodo) => {
        await queryClient.cancelQueries({ queryKey });

        const previousTodos = queryClient.getQueryData(queryKey);

        queryClient.setQueryData(queryKey, (old) => ({
          ...old,
          tasks: [
            ...old.tasks,
            {
              ...newTodo,
              updatedAt: new Date().toISOString(),
            },
          ],
        }));

        return { previousTodos };
      },
      onError: (err, newTodo, context) => {
        queryClient.setQueryData(queryKey, context.previousTodos);
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey });
      },
    },
  });

  const handleCreateTask = async (title: string, description: string) => {
    mutate({ toDoListId, data: { title, description } });
    await queryClient.refetchQueries({
      queryKey: getGetToDoListQueryKey(toDoListId),
    });
  };

  return { createTask: handleCreateTask };
}

export function useRemoveTaskAdapter(toDoListId: string) {
  const queryClient = useQueryClient();
  const queryKey = getGetToDoListQueryKey(toDoListId);

  const { mutate } = useRemoveTask({
    mutation: {
      onMutate: async (newTodo) => {
        await queryClient.cancelQueries({ queryKey });

        const previousTodos = queryClient.getQueryData(queryKey);

        queryClient.setQueryData(queryKey, (old) =>
          old.tasks.filter((todo) => todo.id !== newTodo.id)
        );

        return { previousTodos };
      },
      onError: (err, newTodo, context) => {
        queryClient.setQueryData(queryKey, context.previousTodos);
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey });
      },
    },
  });

  const handleRemoveTask = (taskId: string) => {
    mutate({ taskId });
  };

  return { removeTask: handleRemoveTask };
}

export function useUpdateTaskAdapter(toDoListId: string) {
  const queryClient = useQueryClient();
  const queryKey = getGetToDoListQueryKey(toDoListId);

  const { mutate } = useUpdateTask({
    mutation: {
      onMutate: async ({ taskId, data }) => {
        await queryClient.cancelQueries({ queryKey });

        const previousTodos = queryClient.getQueryData(queryKey);

        const tasks = [...previousTodos.tasks];
        const targetTask = tasks.findIndex((task) => task.id === taskId);
        tasks[targetTask] = {
          ...tasks[targetTask],
          ...data,
        };

        queryClient.setQueryData(queryKey, (old) => ({ ...old, tasks }));
        return { previousTodos };
      },
      onError: (err, newTodo, context) => {
        queryClient.setQueryData(queryKey, context.previousTodos);
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey });
      },
    },
  });

  const handleUpdateTask = (taskId: string, data: UpdateTaskMutationBody) => {
    mutate({ taskId, data });
  };

  return { updateTask: handleUpdateTask };
}
