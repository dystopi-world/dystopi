import { request, gql } from 'graphql-request';

const CMS_API = process.env.NEXT_PUBLIC_CMS_ENDPOINT;

export const getImages = async () => {
  const query = gql`
    query GetImages {
      imagesConnection(first: 100) {
        edges {
          node {
            image {
              mimeType
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(CMS_API, query);

  return result.imagesConnection.edges;
};

export const getVideos = async () => {
  const query = gql`
    query MyQuery {
      videos {
        video {
          mimeType
          url
          fileName
        }
      }
    }
  `;
  const result = await request(CMS_API, query);

  return result.videos;
};
