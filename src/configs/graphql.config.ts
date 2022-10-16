import { registerAs } from '@nestjs/config';

export default registerAs('graphql', () => ({
  routePath: process.env.GRAPHQL_ROUTE_NAME || 'graphql',
  schemaPath: process.env.GRAPHQL_SCHEMA_FILE || 'src/graphql/schema.gql',
}));
