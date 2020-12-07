import { gql, useQuery } from '@apollo/client';

const GET_GIT = gql`{
    search(query: "react stars:>10000", type: REPOSITORY, first: 10) {
      repositoryCount
  
      edges {
        node {
          ... on Repository {
            stargazers {
              totalCount
            }
            resourcePath
            repositoryTopics(first: 10) {
              totalCount
              nodes {
                topic {
                  name
                  stargazerCount
                  relatedTopics {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }`;

  function SearchGit({ onDogSelected }) {

  }

// export const signUp = (body) => {
//     return fetch({
//       method: 'POST',
//       url: `${API}/sign-up`,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     });
//   };