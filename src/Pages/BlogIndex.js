import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading, Subheading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
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
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-sm text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
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
        {posts ? (
          posts.slice(0, visible).map(({ fields }, index) => {
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
        ) : (
          <Subheading
            style={{
              textAlign: "center",
              fontSize: "1.8rem",
              color: "#243e63",
              fontWeight: 900,
            }}
          >
            No Highlights found!
          </Subheading>
        )}
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
