import { AppProps } from 'next/app';
import '@/styles/global.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
