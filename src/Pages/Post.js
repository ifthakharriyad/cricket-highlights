import React, { useEffect, useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { useParams } from "react-router-dom";
import createSlug from "helpers/createSlug";
import fmtToHTML from "helpers/fmtToHTML";
import VideoSection from "components/testimonials/VideoSection";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default ({ posts }) => {
  const [post, setPost] = useState();
  const { slug } = useParams();
  useEffect(() => {
    let p = posts
      ? posts.filter((p) => createSlug(p.fields.title) == slug)
      : null;
    setPost(p ? p[0].fields : null);
  }, [posts]);
  return (
    <>
      <HeadingRow>
        <Heading>{post ? post.title : null}</Heading>
      </HeadingRow>
      <Text>{post ? fmtToHTML(post.paragraphs.content) : null}</Text>
      <VideoSection vUrls={post?.videoIframeLinks} />
    </>
  );
};
