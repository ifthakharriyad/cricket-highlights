import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings";
import { Link } from "react-router-dom";

const Heading = tw(SectionHeading)``;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/3 lg:w-1/4 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-40 h-40 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ cards }) => {
  return (
    <>
      <Cards>
        {cards ? (
          cards.map((card, index) => (
            <Card key={index}>
              <Link to={"/teams/" + card.fields.slug}>
                <CardImage
                  imageSrc={"https:" + card.fields.image.fields.file.url}
                />
                <CardContent>
                  <span className="name">{card.fields.name}</span>
                </CardContent>
              </Link>
            </Card>
          ))
        ) : (
          <Heading>No Teams found!</Heading>
        )}
      </Cards>
    </>
  );
};
