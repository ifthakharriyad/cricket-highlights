import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

async function getContents(contentType, ord) {
  try {
    return await client.getEntries({
      content_type: contentType,
      order: ord ? ord : null,
    });
  } catch (error) {
    console.error(error);
  }
}
export default getContents;
