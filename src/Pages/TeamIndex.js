import React, { useState } from "react";
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid";
import { useHistory } from "react-router-dom";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ headingText = "Teams", teams, vis, btnPath, btnTxt }) => {
  const [visible, setVisible] = useState(vis ? vis : teams ? teams.length : 20);
  const history = useHistory();
  const onLoadMoreClick = () => {
    if (btnPath) {
      history.push(btnPath);
    }
    setVisible((v) => v + 8);
  };
  return (
    <div>
      <HeadingRow>
        <Heading>{headingText}</Heading>
      </HeadingRow>

      <ProfileThreeColGrid cards={teams ? teams.slice(0, visible) : null} />
      {visible < teams?.length && (
        <ButtonContainer>
          <LoadMoreButton onClick={onLoadMoreClick}>
            {btnTxt ? btnTxt : "Load More"}
          </LoadMoreButton>
        </ButtonContainer>
      )}
    </div>
  );
};
