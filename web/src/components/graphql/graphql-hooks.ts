import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  allIngredients?: Maybe<Array<Maybe<IngredientType>>>;
  categoryByName?: Maybe<CategoryType>;
  ingredientByName?: Maybe<IngredientType>;
  /** Search ingredients by the name it may start with */
  searchIngredient?: Maybe<Array<Maybe<IngredientType>>>;
};


export type QueryCategoryByNameArgs = {
  name: Scalars['String'];
};


export type QueryIngredientByNameArgs = {
  name: Scalars['String'];
};


export type QuerySearchIngredientArgs = {
  name: Scalars['String'];
};

export type IngredientType = {
  __typename?: 'IngredientType';
  id: Scalars['ID'];
  name: Scalars['String'];
  notes: Scalars['String'];
  category: CategoryType;
};

export type CategoryType = {
  __typename?: 'CategoryType';
  id: Scalars['ID'];
  name: Scalars['String'];
  ingredients: Array<IngredientType>;
};

export type AllIngredientsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllIngredientsQuery = (
  { __typename?: 'Query' }
  & { allIngredients?: Maybe<Array<Maybe<(
    { __typename?: 'IngredientType' }
    & Pick<IngredientType, 'id' | 'name' | 'notes'>
    & { category: (
      { __typename?: 'CategoryType' }
      & Pick<CategoryType, 'id' | 'name'>
    ) }
  )>>> }
);


export const AllIngredientsDocument = gql`
    query allIngredients {
  allIngredients {
    id
    name
    notes
    category {
      id
      name
    }
  }
}
    `;

/**
 * __useAllIngredientsQuery__
 *
 * To run a query within a React component, call `useAllIngredientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllIngredientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllIngredientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllIngredientsQuery(baseOptions?: Apollo.QueryHookOptions<AllIngredientsQuery, AllIngredientsQueryVariables>) {
        return Apollo.useQuery<AllIngredientsQuery, AllIngredientsQueryVariables>(AllIngredientsDocument, baseOptions);
      }
export function useAllIngredientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllIngredientsQuery, AllIngredientsQueryVariables>) {
          return Apollo.useLazyQuery<AllIngredientsQuery, AllIngredientsQueryVariables>(AllIngredientsDocument, baseOptions);
        }
export type AllIngredientsQueryHookResult = ReturnType<typeof useAllIngredientsQuery>;
export type AllIngredientsLazyQueryHookResult = ReturnType<typeof useAllIngredientsLazyQuery>;
export type AllIngredientsQueryResult = Apollo.QueryResult<AllIngredientsQuery, AllIngredientsQueryVariables>;