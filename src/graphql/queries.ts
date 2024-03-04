/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodo = /* GraphQL */ `query GetTodo($pointName: String!, $timestamp: AWSDateTime!) {
  getTodo(pointName: $pointName, timestamp: $timestamp) {
    id
    pointName
    pointDesc
    timestamp
    siteName
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $pointName: String
  $timestamp: ModelStringKeyConditionInput
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTodos(
    pointName: $pointName
    timestamp: $timestamp
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      pointName
      pointDesc
      timestamp
      siteName
      value
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const todosBySiteNameAndTimestamp = /* GraphQL */ `query TodosBySiteNameAndTimestamp(
  $siteName: String!
  $timestamp: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  todosBySiteNameAndTimestamp(
    siteName: $siteName
    timestamp: $timestamp
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      pointName
      pointDesc
      timestamp
      siteName
      value
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TodosBySiteNameAndTimestampQueryVariables,
  APITypes.TodosBySiteNameAndTimestampQuery
>;
