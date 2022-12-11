import {
  BrowserRouter as ReactRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import BlogIndex from "Pages/BlogIndex";
import TeamIndex from "Pages/TeamIndex";

export default function Routes({ posts, teams }) {
  return (
    <>
      <Route path="/highlights" sitemapIndex>
        <BlogIndex
          posts={posts}
          headingText="Highlights"
          btnTxt="More Highlights"
        />
      </Route>
      <Route path="/teams" sitemapIndex>
        <TeamIndex teams={teams} btnTxt="More Teams" />
      </Route>
      <Route exact path="/" sitemapIndex>
        <BlogIndex
          posts={posts}
          vis={8}
          headingText="Latest Highlights"
          btnTxt="More Highlights"
          btnPath="/highlights"
          styl={{ marginBottom: "5rem" }}
        />
        <TeamIndex teams={teams} vis={8} btnTxt="More Teams" btnPath="/teams" />
      </Route>
    </>
  );
}
