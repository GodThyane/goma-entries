import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
   uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
   cache: new InMemoryCache(),
});

export default apolloClient;
