// Barrel exports for core CLI modules (incremental migration)
// Prefer requiring from 'cli/core' instead of individual files:
//   const { chatCompletion, getApiKey } = require('../cli/core');
module.exports = {
  // API key & config
  ...require('./apikey.cjs'),
  // OpenRouter integration
  ...require('./openrouter.cjs'),
  // (Future) tools/http utilities when migrated here:
  // ...require('./tools.cjs'),
};