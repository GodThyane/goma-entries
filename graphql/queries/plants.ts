import { DocumentNode, gql } from '@apollo/client';

export const GET_PLANTS = gql`
   query GetPlants {
      plantCollection {
         total
         items {
            plantName
            image {
               url
            }
            category {
               title
            }
            slug
            sys {
               id
            }
         }
      }
   }
`;

export const GET_PLANTS_INFINITE: DocumentNode = gql`
   query GetPlantsInfinite($limit: Int!, $skip: Int!) {
      plantCollection(limit: $limit, skip: $skip) {
         total
         items {
            plantName
            image {
               url
            }
            slug
            category {
               title
               color
               slug
            }
            sys {
               id
            }
         }
      }
   }
`;

export const GET_PLANTS_BY_CATEGORY_INFINITE: DocumentNode = gql`
   query GetPlantsByCategoryInfinite(
      $category: String!
      $limit: Int!
      $skip: Int!
   ) {
      plantCollection(
         where: { category: { slug: $category } }
         limit: $limit
         skip: $skip
      ) {
         total
         items {
            plantName
            image {
               url
            }
            slug
            category {
               title
               color
               slug
            }
            sys {
               id
            }
         }
      }
   }
`;

export const GET_CATEGORY_BY_SLUG: DocumentNode = gql`
   query GetCategoryBySlug($slug: String!) {
      categoryCollection(where: { slug: $slug }) {
         items {
            title
            color
            slug
            categoryDescription
            sys {
               id
            }
         }
      }
   }
`;

export const GET_CATEGORY_BY_ID: DocumentNode = gql`
   query GetCategoryById($id: String!) {
      category(id: $id) {
         title
         color
         slug
         categoryDescription
         sys {
            id
         }
      }
   }
`;

export const GET_PLANTS_BY_AUTHOR: DocumentNode = gql`
   query GetPlantsByAuthor($id: String!) {
      plantCollection(where: { author: { sys: { id: $id } } }) {
         items {
            plantName
            slug
            sys {
               id
            }
         }
      }
   }
`;
