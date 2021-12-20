import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./App.css";
import { Blog } from "./blog/Blog";
import { Home } from "./home/Home";
import { Routes, Route } from "react-router-dom";
import { MainNavIcons } from "./main-nav/MainNavIcons";
import { BlogPost } from "./post/BlogPost";
import { AboutMe } from "./about-me/AboutMe";
import { NavSectionURL } from "./utility/types";
import { CityMap } from "./places/CityMap/CityMap";
import { ListeningTo } from "./listening-to/ListeningTo";
import { Footer } from "./footer/Footer";
import { SelectPlace } from "./places/SelectPlace/SelectPlace";

function App() {
  const client = new ApolloClient({
    uri: "https://api-us-east-1.graphcms.com/v2/ckwcbs3zf4d0k01xp350q8mde/master",
    cache: new InMemoryCache(),
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <MainNavIcons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={NavSectionURL["About Me"]} element={<AboutMe />} />
          <Route path={NavSectionURL.Blog} element={<Blog />} />
          <Route path={NavSectionURL.Post} element={<BlogPost />} />
          <Route path={NavSectionURL.Places} element={<SelectPlace />} />
          <Route path={NavSectionURL.City} element={<CityMap />} />
          <Route path={"/listening-to"} element={<ListeningTo />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </ApolloProvider>
    </div>
  );
}

export default App;
