import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getClient = () => {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: process.env.API_URL,
        headers: {
            Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
        }
    });
    return client;
}