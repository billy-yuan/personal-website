import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./App.css";
import { Blog } from "./blog/Blog";

function App() {
  const client = new ApolloClient({
    uri: "https://api-us-east-1.graphcms.com/v2/ckwcbs3zf4d0k01xp350q8mde/master",
    cache: new InMemoryCache(),
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Blog />
      </ApolloProvider>
    </div>
  );
}

export default App;
