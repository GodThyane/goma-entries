import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
   overwrite: true,
   schema:
      'https://graphql.contentful.com/content/v1/spaces/jcu0yamxms9o?access_token=IS_QUdLxlrBQwy9UtV-rf4scv8053R9CTAesKiZraXs',
   documents: [
      /*'./graphql/!**!/!*.tsx',
      './graphql/!**!/!*.ts',*/
      './graphql/**/*.graphql',
      './graphql/**/*.gql',
   ],
   generates: {
      './graphql/generated/schema.ts': {
         plugins: [
            'typescript',
            'typescript-operations',
            'typescript-react-apollo',
         ],
         config: {
            withHooks: true,
            withHOC: false,
            withComponent: false,
         },
      },
      './graphql/generated/schema.json': {
         plugins: ['introspection'],
      },
      './graphql/generated/schema.graphql': {
         plugins: ['schema-ast'],
      },
   },
};

export default config;
