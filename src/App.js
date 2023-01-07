import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "routes/root";
import BlogIndex from "Pages/BlogIndex";
import getContents from "helpers/getContents";
import ErrorPage from "Pages/error";
import Post from "Pages/Post";

import "tailwindcss/lib/css/preflight.css";
import TeamIndex from "Pages/TeamIndex";
import getBroadcasts from "helpers/getBroadcasts";

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
                    posts={posts ? getBroadcasts(posts) : null}
                    vis={4}
                    headingText="Live Matches"
                    btnTxt="More Live Matches"
                    btnPath="/live"
                    styl={{ marginBottom: "5rem" }}
                  />
                  <BlogIndex
                    posts={posts}
                    vis={8}
                    headingText="Latest Highlights"
                    btnTxt="More Highlights"
                    btnPath="/highlights"
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
              path: "live",
              element: (
                <BlogIndex
                  posts={posts ? getBroadcasts(posts) : null}
                  headingText="Live Matches"
                  btnTxt="More Live Matches"
                />
              ),
            },
            {
              path: "highlights",
              element: (
                <BlogIndex
                  posts={posts}
                  headingText="Highlights"
                  btnTxt="More Highlights"
                />
              ),
            },
            {
              path: "highlights/:slug",
              element: <Post posts={posts} />,
            },
            {
              path: "teams",
              element: <TeamIndex teams={teams} btnTxt="More Teams" />,
            },
            {
              path: "teams/:team",
              element: <BlogIndex posts={posts} headingText="Highlights" />,
            },
          ],
        },
      ])}
    />
  );
}

export default App;
