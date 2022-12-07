import React from "react";
import { Outlet } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import Header from "components/headers/light";
import Footer from "components/footers/MiniCenteredFooter";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ isLoading }) => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          {isLoading ? (
            <ThreeDots
              height="60"
              width="60"
              radius="9"
              color="#6415ff"
              wrapperStyle={{
                alignItems: "center",
                justifyContent: "center",
              }}
              visible={true}
            />
          ) : (
            <Outlet />
          )}
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
