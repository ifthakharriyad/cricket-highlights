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
export default ({ headingText = "Privacy Policy" }) => {
  return (
    <>
      <HeadingRow>
        <Heading>{headingText}</Heading>
      </HeadingRow>
      <Text>
        <p>
          This Privacy Policy outlines how www.crickethighlights.org (“we”, “us”
          or “our”) collects, stores, uses, and discloses your personal data. We
          take your privacy seriously and want to provide you with as much
          information as possible about how we use your information. This
          privacy policy applies to all information collected through our
          website and services, and any associated services we provide.
        </p>
        <p>
          By using the website, you consent to the data practices outlined in
          this Privacy Policy.
        </p>
        <h2>Do we share or collect any of your data?</h2>
        <p>
          We do not collect any of your data, we run third-party advertisements
          on our website that may possibly collect your personal data as third
          parties who provide advertising services on our behalf to help us with
          our business activities, such as Advert, data analysis, customer
          service, and marketing assistance. To know more about your personal
          data please do check our third-party advertiser who runs adverts on
          our website. By visiting us you are accepting our policy and are happy
          with it, if somehow you are disagree or happy or have any doubt please
          can leave the website immediately.
        </p>
        <h2>Changes to this Privacy Policy</h2>
        <p>
          This Privacy Policy may be updated from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page. We
          encourage you to review this Privacy Policy periodically to stay
          informed about how we are protecting the personal data we collect.
          Contact us If you have any questions about this Privacy Policy, please
          contact us.
        </p>

        <h1>GDPR</h1>
        <p>
          The European Union (EU) GDPR comes into force on May 25, 2018. This is
          a European Union law that addresses the use of personal data and the
          collection for all EU residents. The law aims at providing increased
          visibility and control to users over how their data is collected and
          used by websites such as www.crickethighlights.org In this section,
          you'll find additional information with regards to the types of
          cookies www.crickethighlights.org is using, for what purpose, and how
          you can personalize your cookie settings.
        </p>
        <ul>
          <li>
            We personally www.crickethighlights.org do not collect any of your
            personal information or any of your personal data while you are
            visiting our website as a user or viewer or your personal interest.
          </li>
          <li>
            <p>
              Advertisement runs on our website directly placed by linked
              third-party companies (e.g. google etc).
            </p>
          </li>
          <li>
            <p>
              For more information about GDPR and your data protection, please
              visit https://gdpr-info.eu/ for all the latest information.
            </p>
          </li>
        </ul>

        <h1>DMCA Compliance Policy </h1>
        <p>
          This DMCA Compliance Policy (the “Policy”) is intended to provide
          information about how the website (the “Site”) complies with the
          Digital Millennium Copyright Act of 1998 (“DMCA”).
        </p>
        <p>
          The Site is committed to complying with all applicable copyright laws,
          including the DMCA. The Site respects the intellectual property rights
          of others and expects its users to do the same.
        </p>
        <p>
          In accordance with the DMCA, the Site has designated an agent to
          receive notifications of alleged copyright infringement. If you
          believe that your work has been copied in a way that constitutes
          copyright infringement, please provide the Site's designated copyright
          agent with the following information:
        </p>
        <p>Usage Data is collected automatically when using the Service.</p>
        <ul>
          <li>
            <p>
              {" "}
              A physical or electronic signature of the copyright owner or a
              person authorized to act on the copyright owner's behalf;{" "}
            </p>
          </li>
          <li>
            <p>
              {" "}
              A description of the copyrighted work that you claim has been
              infringed;{" "}
            </p>
          </li>
          <li>
            <p>
              A description of where the material that you claim is infringing
              is located on the Site;{" "}
            </p>
          </li>
          <li>
            <p>Your address, telephone number, and email address;</p>
          </li>
          <li>
            <p>
              A statement by you that you have a good faith belief that the
              disputed use is not authorized by the copyright owner, its agent,
              or the law; and{" "}
            </p>
          </li>
          <li>
            <p>
              A statement by you, made under penalty of perjury, that the above
              information in your notice is accurate and that you are the
              copyright owner or authorized to act on the copyright owner's
              behalf.
            </p>
          </li>
        </ul>
        <p>
          The Site's designated copyright agent for notice of claims of
          copyright infringement can be reached as follows:
        </p>
        <p>[NAME] [ADDRESS] [EMAIL]</p>
        <p>
          If the Site receives a valid DMCA notification, the Site will promptly
          remove or disable access to the allegedly infringing material. The
          Site will also advise the user responsible for the allegedly
          infringing material of the notification and may, at its discretion,
          terminate the user's access to the Site.
        </p>
        <p>
          The Site may also, at its discretion, terminate access to the Site by
          any user who is determined to be a repeat infringer. A repeat
          infringer is any user who has been notified of infringing activity
          more than twice and/or has had a user submission removed from the Site
          more than twice.
        </p>

        <p>
          If you believe that a user of the Site is a repeat infringer, please
          provide the Site's designated copyright agent with the following
          information:
        </p>
        <ul>
          <li>
            <p>
              Identification of the material that has been removed or to which
              access has been disabled and the location at which the material
              appeared before it was removed or disabled;{" "}
            </p>
          </li>
          <li>
            <p>
              A statement that you have a good faith belief that the material
              was removed or disabled as a result of a mistake or
              misidentification of the material; and{" "}
            </p>
          </li>
          <li>
            <p>
              Your name, address, telephone number, and email address, and a
              statement that you consent to the jurisdiction of the Federal
              District Court for the judicial district in which the address is
              located, or if your address is outside of the United States, for
              any judicial district in which the service provider may be found,
              and that you will accept service of process from the person who
              provided notification of alleged infringement or an agent of such
              person.{" "}
            </p>
          </li>
        </ul>
        <p>
          The Site's designated copyright agent for notification of claims of
          repeat infringement can be reached as follows:
        </p>
        <p>
          [NAME] [ADDRESS] [EMAIL] The Site reserves the right to modify this
          Policy at any time, so please review it frequently. If the Site makes
          material changes to this Policy, the Site will notify you here, by
          email, or by means of a notice on the Site's home page.
        </p>
        <p>
          Crickethighlights.org, as a search engine website, is not responsible
          for the content of external websites. Please make sure before sending
          an A/V removal request that the media in question is actually hosted
          by crickethighlights.org and is not hosted by a third party. You can
          check the location where a video is hosted by looking for the host
          descriptor displayed below each video object. Each host descriptor
          contains a link to the original location where the video was indexed
          from.
        </p>
        <h2>Content hosted by Crickethighlights.org</h2>
        <p>
          For A/V content that is hosted by crickethighlights.org, please fill
          in the request form below and we will endeavor to work closely with
          you in compliance with the Digital Millenium Copyright Act.
        </p>
      </Text>
    </>
  );
};
