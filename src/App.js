import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "routes/root";
import BlogIndex from "Pages/BlogIndex";
import getContents from "helpers/getContents";
import ErrorPage from "Pages/error";
import Post from "Pages/Post";

import "tailwindcss/lib/css/preflight.css";
import TeamIndex from "Pages/TeamIndex";

function App() {
  useEffect(() => {
    let p, t;
    const fetchCont = async () => {
      setIsLoading(true);
      p = await getContents("post", "-fields.dateAndTime");
      t = await getContents("team", "fields.name");
    };
    fetchCont()
      .then(() => {
        setIsLoading(false);
        if (p) {
          setPosts(p.items);
        }
        if (t) {
          setTeams(t.items);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const [posts, setPosts] = useState();
  const [teams, setTeams] = useState();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <Root isLoading={isLoading} />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "/",
              element: (
                <>
                  <BlogIndex
                    posts={posts}
                    vis={8}
                    headingText="Latest Matches"
                    btnTxt="More Matches"
                    btnPath="/matches"
                    styl={{ marginBottom: "5rem" }}
                  />
                  <TeamIndex
                    teams={teams}
                    vis={8}
                    btnTxt="More Teams"
                    btnPath="/teams"
                  />
                </>
              ),
            },
            {
              path: "matches",
              element: (
                <BlogIndex
                  posts={posts}
                  headingText="Matches"
                  btnTxt="More Matches"
                />
              ),
            },
            {
              path: "matches/:slug",
              element: <Post posts={posts} />,
            },
            {
              path: "teams",
              element: <TeamIndex teams={teams} btnTxt="More Teams" />,
            },
            {
              path: "teams/:team",
              element: <BlogIndex posts={posts} headingText="Matches" />,
            },
          ],
        },
      ])}
    />
  );
}

export default App;
