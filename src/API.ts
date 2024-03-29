/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  pointName: string,
  pointDesc?: string | null,
  timestamp: string,
  siteName?: string | null,
  value?: number | null,
};

export type ModelTodoConditionInput = {
  pointDesc?: ModelStringInput | null,
  siteName?: ModelStringInput | null,
  value?: ModelFloatInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  pointName: string,
  pointDesc?: string | null,
  timestamp: string,
  siteName?: string | null,
  value?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id?: string | null,
  pointName: string,
  pointDesc?: string | null,
  timestamp: string,
  siteName?: string | null,
  value?: number | null,
};

export type DeleteTodoInput = {
  pointName: string,
  timestamp: string,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  pointName?: ModelStringInput | null,
  pointDesc?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  siteName?: ModelStringInput | null,
  value?: ModelFloatInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  pointName?: ModelSubscriptionStringInput | null,
  pointDesc?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  siteName?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    pointName: string,
    pointDesc?: string | null,
    timestamp: string,
    siteName?: string | null,
    value?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    pointName: string,
    pointDesc?: string | null,
    timestamp: string,
    siteName?: string | null,
    value?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    pointName: string,
    pointDesc?: string | null,
    timestamp: string,
    siteName?: string | null,
    value?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  pointName: string,
  timestamp: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    pointName: string,
    pointDesc?: string | null,
    timestamp: string,
    siteName?: string | null,
    value?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  pointName?: string | null,
  timestamp?: ModelStringKeyConditionInput | null,
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      pointName: string,
      pointDesc?: string | null,
      timestamp: string,
      siteName?: string | null,
      value?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TodosBySiteNameAndTimestampQueryVariables = {
  siteName: string,
  timestamp?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TodosBySiteNameAndTimestampQuery = {
  todosBySiteNameAndTimestamp?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      pointName: string,
      pointDesc?: string | null,
      timestamp: string,
      siteName?: string | null,
      value?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    pointName: string,
    pointDesc?: string | null,
    timestamp: string,
    siteName?: string | null,
    value?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    pointName: string,
    pointDesc?: string | null,
    timestamp: string,
    siteName?: string | null,
    value?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    pointName: string,
    pointDesc?: string | null,
    timestamp: string,
    siteName?: string | null,
    value?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
