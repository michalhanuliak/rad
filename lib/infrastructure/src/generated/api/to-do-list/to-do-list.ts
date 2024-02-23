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
  TaskDto
} from '../../schemas'
import { apiClientMutator } from '../../../config/mutator';
import type { ErrorType } from '../../../config/mutator';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


export const getToDoLists = (
    
 options?: SecondParameter<typeof apiClientMutator>,signal?: AbortSignal
) => {
      
      
      return apiClientMutator<void>(
      {url: `http://localhost:4000/api/to-do-list`, method: 'GET', signal
    },
      options);
    }
  

export const getGetToDoListsQueryKey = () => {
    return [`http://localhost:4000/api/to-do-list`] as const;
    }

    
export const getGetToDoListsQueryOptions = <TData = Awaited<ReturnType<typeof getToDoLists>>, TError = ErrorType<unknown>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getToDoLists>>, TError, TData>, request?: SecondParameter<typeof apiClientMutator>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetToDoListsQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getToDoLists>>> = ({ signal }) => getToDoLists(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getToDoLists>>, TError, TData> & { queryKey: QueryKey }
}

export type GetToDoListsQueryResult = NonNullable<Awaited<ReturnType<typeof getToDoLists>>>
export type GetToDoListsQueryError = ErrorType<unknown>

export const useGetToDoLists = <TData = Awaited<ReturnType<typeof getToDoLists>>, TError = ErrorType<unknown>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getToDoLists>>, TError, TData>, request?: SecondParameter<typeof apiClientMutator>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetToDoListsQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const createToDoList = (
    
 options?: SecondParameter<typeof apiClientMutator>,) => {
      
      
      return apiClientMutator<void>(
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
      
      
      return apiClientMutator<void>(
      {url: `http://localhost:4000/api/to-do-list/${taskId}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetTaskQueryKey = (taskId: string,) => {
    return [`http://localhost:4000/api/to-do-list/${taskId}`] as const;
    }

    
export const getGetTaskQueryOptions = <TData = Awaited<ReturnType<typeof getTask>>, TError = ErrorType<unknown>>(taskId: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getTask>>, TError, TData>, request?: SecondParameter<typeof apiClientMutator>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetTaskQueryKey(taskId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getTask>>> = ({ signal }) => getTask(taskId, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(taskId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getTask>>, TError, TData> & { queryKey: QueryKey }
}

export type GetTaskQueryResult = NonNullable<Awaited<ReturnType<typeof getTask>>>
export type GetTaskQueryError = ErrorType<unknown>

export const useGetTask = <TData = Awaited<ReturnType<typeof getTask>>, TError = ErrorType<unknown>>(
 taskId: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getTask>>, TError, TData>, request?: SecondParameter<typeof apiClientMutator>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetTaskQueryOptions(taskId,options)

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
    