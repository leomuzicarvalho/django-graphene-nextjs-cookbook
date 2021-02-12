import { useAllIngredientsQuery } from '../components/graphql/graphql-hooks';

export default function GraphqlTest() {
  const { data, loading, error } = useAllIngredientsQuery();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    throw error;
  }

  return <ul></ul>;
}
