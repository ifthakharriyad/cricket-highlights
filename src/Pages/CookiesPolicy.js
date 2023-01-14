import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";

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
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ headingText = "Cookies Policy" }) => {
  return (
    <>
      <HeadingRow>
        <Heading>{headingText}</Heading>
      </HeadingRow>
      <Text>
        <p>
          This Cookies Policy explains how we, [Company Name], use cookies and
          similar technologies to recognize you when you visit our website
          [URL]. It explains what these technologies are and why we use them, as
          well as your rights to control our use of them.
        </p>
        <h2>What are cookies?</h2>
        <p>
          Cookies are small data files placed on your computer or mobile device
          when you visit a website. Cookies are widely used by online service
          providers in order to (for example) make their websites or services
          work, or to work more efficiently, as well as to provide reporting
          information.
        </p>
        <p>
          Cookies set by the website owner (in this case, [Company Name]) are
          called “first-party cookies”. Cookies set by parties other than the
          website owner are called “third-party cookies”. Third-party cookies
          enable third-party features or functionality to be provided on or
          through the website (e.g. advertising, interactive content, and
          analytics). The parties that set these third-party cookies can
          recognize your computer both when it visits the website in question
          and also when it visits certain other websites.
        </p>
        <h2>Why do we use cookies?</h2>
        <p>
          We use first and third-party cookies for several reasons. Some cookies
          are required for technical reasons in order for our Website to
          operate, and we refer to these as “essential” or “strictly necessary”
          cookies. Other cookies also enable us to track and target the
          interests of our users to enhance the experience on our Website. Third
          parties serve cookies through our Website for advertising, analytics
          and other purposes. This is described in more detail below.
        </p>
        <p>
          The specific types of first and third-party cookies served through our
          Website and the purposes they perform are described in the table
          below:
        </p>

        <h2>Cookie Type Purpose</h2>
        <p>
          Strictly Necessary These cookies are necessary for the website to
          function and cannot be switched off in our systems. They are usually
          only set in response to actions you make that amount to a request for
          services, such as setting your privacy preferences, logging in, or
          filling in forms.
        </p>
        <p>
          Functionality These cookies enable the website to provide enhanced
          functionality and personalization. They may be set by us or by
          third-party providers whose services we have added to our pages.
        </p>
        <p>
          Performance These cookies allow us to count visits and traffic sources
          to measure and improve our site's performance. They help us to know
          which pages are the most and least popular and see how visitors move
          around the site.
        </p>
        <p>
          Targeting These cookies may be set through our site by our advertising
          partners. They may be used by those companies to build a profile of
          your interests and show you relevant adverts on other sites.
        </p>
        <h2>How can I control cookies?</h2>
        <p>
          You can control and/or delete cookies as you wish for details, see
          aboutcookies.org. You can delete all cookies that are already on your
          computer and you can set most browsers to prevent them from being
          placed. If you do this, however, you may have to manually adjust some
          preferences every time you visit a site and some services and
          functionalities may not work.
        </p>
        <p>
          Please note that by deleting or disabling future cookies, your user
          experience may be affected and you might not be able to take advantage
          of certain functions of our site.
        </p>
      </Text>
    </>
  );
};
