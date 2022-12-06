import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import slugify from "slugify";
import createSlug from "helpers/createSlug";
import { useNavigate, useParams } from "react-router-dom";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-1 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/4 sm:pr-8`}
  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-48 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-6 pt-2 border-2 border-t-0 rounded-lg rounded-t-none border-[#E2E8F0]`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-sm text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;
const p = {
  imageSrc:
    "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  category: "Travel Tips",
  date: "April 21, 2020",
  title: "Safely Travel in Foreign Countries",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  url: "https://timerse.com",
  featured: true,
};
export default ({ headingText, posts, vis, btnPath, btnTxt, styl }) => {
  const [visible, setVisible] = useState(vis ? vis : 8);
  const nav = useNavigate();
  const onLoadMoreClick = () => {
    if (btnPath) {
      nav(btnPath);
    }
    setVisible((v) => v + 8);
  };
  const { team } = useParams();
  if (team && posts) {
    posts = posts.filter((post) => {
      let found = false;
      post.fields.teams.forEach((t) => {
        if (t.fields.slug === team) {
          found = true;
        }
      });
      return found;
    });
  }
  return (
    <div style={styl ? styl : null}>
      {headingText ? (
        <HeadingRow>
          <Heading>{headingText}</Heading>
        </HeadingRow>
      ) : null}

      <Posts>
        {posts
          ? posts.slice(0, visible).map(({ fields }, index) => {
              let date = new Date(fields.dateAndTime);
              return (
                <PostContainer key={index}>
                  <Post
                    className="group"
                    as="a"
                    href={`/highlights/${createSlug(fields.title)}`}
                  >
                    <Image imageSrc={fields.image.fields.file.url} />
                    <Info>
                      <CreationDate>{date.toLocaleDateString()}</CreationDate>
                      <Title>{fields.title}</Title>
                      {fields.featured && fields.description && (
                        <Description>{fields.description}</Description>
                      )}
                    </Info>
                  </Post>
                </PostContainer>
              );
            })
          : null}
      </Posts>
      {visible < posts?.length && (
        <ButtonContainer>
          <LoadMoreButton onClick={onLoadMoreClick}>
            {btnTxt ? btnTxt : "Load More"}
          </LoadMoreButton>
        </ButtonContainer>
      )}
    </div>
  );
};
