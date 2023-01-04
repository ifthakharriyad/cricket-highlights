import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import genIfrms from "helpers/genIfrms.js";

import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

import "slick-carousel/slick/slick.css";

const Content = tw.div`max-w-screen-xl mx-auto py-2 lg:py-2`;
const HeadingInfoContainer = tw.div`my-5 flex flex-col items-center`;
const TestimonialSliderContainer = tw.div` w-full flex justify-center items-center mb-10`;
const StyledTabs = styled.div`
  width: 600px;
`;
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ partText, vUrls, heading }) => {
  return (
    <>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle style={{ fontSize: "1.5rem" }}>{heading}</HeadingTitle>
        </HeadingInfoContainer>
        <TestimonialSliderContainer>
          <StyledTabs>
            <Tabs>
              <TabList>
                {vUrls
                  ? vUrls.map((url, i) => {
                      return <Tab key={i}>{partText} {i + 1}</Tab>;
                    })
                  : null}
              </TabList>

              {vUrls
                ? vUrls.map((url, i) => {
                    return <TabPanel key={i}>{genIfrms(url)}</TabPanel>;
                  })
                : null}
            </Tabs>
          </StyledTabs>
        </TestimonialSliderContainer>
        {/* <TestimonialSliderContainer>
          <TestimonialSlider
            nextArrow={<NextArrow />}
            prevArrow={<PreviousArrow />}
          >
            {vUrls
              ? vUrls.map((url, index) => (
                  <Testimonial key={index}>
                    {genIfrms(url)}
                  </Testimonial>
                ))
              : null}
          </TestimonialSlider>
        </TestimonialSliderContainer> */}
      </Content>
      {/* <DecoratorBlob1 />
      <DecoratorBlob2 /> */}
    </>
  );
};
