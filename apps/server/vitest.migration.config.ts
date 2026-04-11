import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      // postgres is a dependency of packages/db, not the root workspace.
      // Vitest running from the root needs an explicit alias so it can
      // resolve the package when migration tests import it directly.
      postgres: resolve(__dirname, '../../packages/db/node_modules/postgres/src/index.js'),
    },
  },
  test: {
    include: ['tests/migration/**/*.test.ts'],
    environment: 'node',
    fileParallelism: false,
    testTimeout: 60_000,
    hookTimeout: 60_000,
  },
});
