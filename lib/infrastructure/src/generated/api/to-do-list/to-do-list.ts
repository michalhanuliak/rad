/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * Cats example
 * The cats API description
 * OpenAPI spec version: 1.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  CreateTaskDto,
  TaskDto,
  ToDoListDto,
  UpdateTaskDto
} from '../../schemas'
import { apiClientMutator } from '../../../config/mutator';
import type { ErrorType } from '../../../config/mutator';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


export const getToDoList = (
    toDoListId: string,
 options?: SecondParameter<typeof apiClientMutator>,signal?: AbortSignal
) => {
      
      
      return apiClientMutator<ToDoListDto>(
      {url: `http://localhost:4000/api/to-do-list/${toDoListId}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetToDoListQueryKey = (toDoListId: string,) => {
    return [`http://localhost:4000/api/to-do-list/${toDoListId}`] as const;
    }

    
export const getGetToDoListQueryOptions = <TData = Awaited<ReturnType<typeof getToDoList>>, TError = ErrorType<unknown>>(toDoListId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getToDoList>>, TError, TData>>, request?: SecondParameter<typeof apiClientMutator>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetToDoListQueryKey(toDoListId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getToDoList>>> = ({ signal }) => getToDoList(toDoListId, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(toDoListId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getToDoList>>, TError, TData> & { queryKey: QueryKey }
}

export type GetToDoListQueryResult = NonNullable<Awaited<ReturnType<typeof getToDoList>>>
export type GetToDoListQueryError = ErrorType<unknown>

export const useGetToDoList = <TData = Awaited<ReturnType<typeof getToDoList>>, TError = ErrorType<unknown>>(
 toDoListId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getToDoList>>, TError, TData>>, request?: SecondParameter<typeof apiClientMutator>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetToDoListQueryOptions(toDoListId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const createTask = (
    toDoListId: string,
    createTaskDto: CreateTaskDto,
 options?: SecondParameter<typeof apiClientMutator>,) => {
      
      
      return apiClientMutator<TaskDto>(
      {url: `http://localhost:4000/api/to-do-list/${toDoListId}`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createTaskDto
    },
      options);
    }
  


export const getCreateTaskMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createTask>>, TError,{toDoListId: string;data: CreateTaskDto}, TContext>, request?: SecondParameter<typeof apiClientMutator>}
): UseMutationOptions<Awaited<ReturnType<typeof createTask>>, TError,{toDoListId: string;data: CreateTaskDto}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createTask>>, {toDoListId: string;data: CreateTaskDto}> = (props) => {
          const {toDoListId,data} = props ?? {};

          return  createTask(toDoListId,data,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type CreateTaskMutationResult = NonNullable<Awaited<ReturnType<typeof createTask>>>
    export type CreateTaskMutationBody = CreateTaskDto
    export type CreateTaskMutationError = ErrorType<unknown>

    export const useCreateTask = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createTask>>, TError,{toDoListId: string;data: CreateTaskDto}, TContext>, request?: SecondParameter<typeof apiClientMutator>}
) => {

      const mutationOptions = getCreateTaskMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const createToDoList = (
    
 options?: SecondParameter<typeof apiClientMutator>,) => {
      
      
      return apiClientMutator<ToDoListDto>(
      {url: `http://localhost:4000/api/to-do-list`, method: 'POST'
    },
      options);
    }
  


export const getCreateToDoListMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createToDoList>>, TError,void, TContext>, request?: SecondParameter<typeof apiClientMutator>}
): UseMutationOptions<Awaited<ReturnType<typeof createToDoList>>, TError,void, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createToDoList>>, void> = () => {
          

          return  createToDoList(requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type CreateToDoListMutationResult = NonNullable<Awaited<ReturnType<typeof createToDoList>>>
    
    export type CreateToDoListMutationError = ErrorType<unknown>

    export const useCreateToDoList = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createToDoList>>, TError,void, TContext>, request?: SecondParameter<typeof apiClientMutator>}
) => {

      const mutationOptions = getCreateToDoListMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const getTask = (
    taskId: string,
 options?: SecondParameter<typeof apiClientMutator>,signal?: AbortSignal
) => {
      
      
      return apiClientMutator<TaskDto>(
      {url: `http://localhost:4000/api/to-do-list/${taskId}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetTaskQueryKey = (taskId: string,) => {
    return [`http://localhost:4000/api/to-do-list/${taskId}`] as const;
    }

    
export const getGetTaskQueryOptions = <TData = Awaited<ReturnType<typeof getTask>>, TError = ErrorType<unknown>>(taskId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getTask>>, TError, TData>>, request?: SecondParameter<typeof apiClientMutator>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetTaskQueryKey(taskId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getTask>>> = ({ signal }) => getTask(taskId, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(taskId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getTask>>, TError, TData> & { queryKey: QueryKey }
}

export type GetTaskQueryResult = NonNullable<Awaited<ReturnType<typeof getTask>>>
export type GetTaskQueryError = ErrorType<unknown>

export const useGetTask = <TData = Awaited<ReturnType<typeof getTask>>, TError = ErrorType<unknown>>(
 taskId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getTask>>, TError, TData>>, request?: SecondParameter<typeof apiClientMutator>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetTaskQueryOptions(taskId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const removeTask = (
    taskId: string,
 options?: SecondParameter<typeof apiClientMutator>,) => {
      
      
      return apiClientMutator<TaskDto>(
      {url: `http://localhost:4000/api/to-do-list/task/${taskId}`, method: 'DELETE'
    },
      options);
    }
  


export const getRemoveTaskMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof removeTask>>, TError,{taskId: string}, TContext>, request?: SecondParameter<typeof apiClientMutator>}
): UseMutationOptions<Awaited<ReturnType<typeof removeTask>>, TError,{taskId: string}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof removeTask>>, {taskId: string}> = (props) => {
          const {taskId} = props ?? {};

          return  removeTask(taskId,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type RemoveTaskMutationResult = NonNullable<Awaited<ReturnType<typeof removeTask>>>
    
    export type RemoveTaskMutationError = ErrorType<unknown>

    export const useRemoveTask = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof removeTask>>, TError,{taskId: string}, TContext>, request?: SecondParameter<typeof apiClientMutator>}
) => {

      const mutationOptions = getRemoveTaskMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const updateTask = (
    taskId: string,
    updateTaskDto: UpdateTaskDto,
 options?: SecondParameter<typeof apiClientMutator>,) => {
      
      
      return apiClientMutator<TaskDto>(
      {url: `http://localhost:4000/api/to-do-list/task/${taskId}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: updateTaskDto
    },
      options);
    }
  


export const getUpdateTaskMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateTask>>, TError,{taskId: string;data: UpdateTaskDto}, TContext>, request?: SecondParameter<typeof apiClientMutator>}
): UseMutationOptions<Awaited<ReturnType<typeof updateTask>>, TError,{taskId: string;data: UpdateTaskDto}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof updateTask>>, {taskId: string;data: UpdateTaskDto}> = (props) => {
          const {taskId,data} = props ?? {};

          return  updateTask(taskId,data,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type UpdateTaskMutationResult = NonNullable<Awaited<ReturnType<typeof updateTask>>>
    export type UpdateTaskMutationBody = UpdateTaskDto
    export type UpdateTaskMutationError = ErrorType<unknown>

    export const useUpdateTask = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateTask>>, TError,{taskId: string;data: UpdateTaskDto}, TContext>, request?: SecondParameter<typeof apiClientMutator>}
) => {

      const mutationOptions = getUpdateTaskMutationOptions(options);

      return useMutation(mutationOptions);
    }
    