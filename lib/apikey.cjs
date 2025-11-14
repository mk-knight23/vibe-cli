// Centralized API Key Management
const inquirer = require('inquirer');
const inquirerModule = inquirer.default || inquirer;
const fs = require('fs');
const path = require('path');
const pc = require('picocolors');

// Global API key storage (in-memory for session)
let globalApiKey = null;
let apiKeyPrompted = false;

// Config functions (avoid circular dependency)
function loadConfig() {
  const home = process.env.HOME || process.env.USERPROFILE || '.';
  const file = path.join(home, '.vibe', 'config.json');
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return {}; }
}

function saveConfig(cfg) {
  const home = process.env.HOME || process.env.USERPROFILE || '.';
  const dir = path.join(home, '.vibe');
  try { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); } catch {}
  const file = path.join(dir, 'config.json');
  fs.writeFileSync(file, JSON.stringify(cfg, null, 2), 'utf8');
}

// Get API key (ask once, use everywhere)
async function getApiKey() {
  // Return cached key if available
  if (globalApiKey) {
    return globalApiKey;
  }

  // Check environment variable first
  const envKey = process.env.OPENROUTER_API_KEY || process.env.OPENROUTER_KEY;
  if (envKey) {
    globalApiKey = String(envKey).trim();
    return globalApiKey;
  }

  // Check config file
  const cfg = loadConfig();
  if (cfg?.openrouter?.apiKey) {
    globalApiKey = cfg.openrouter.apiKey;
    return globalApiKey;
  }

  // Ask user for API key (only once)
  if (!apiKeyPrompted) {
    apiKeyPrompted = true;
    
    try {
      const { apiKey } = await inquirerModule.prompt([
        {
          type: 'password',
          name: 'apiKey',
          message: 'Enter your OpenRouter API key (will be cached for this session):',
          mask: '*',
          validate: (v) => (v && v.trim().length > 0) || 'API key is required',
        },
      ]);
      
      globalApiKey = (apiKey || '').trim();
      
      // Optionally save to config for future use
      const { saveToConfig } = await inquirerModule.prompt([
        {
          type: 'confirm',
          name: 'saveToConfig',
          message: 'Save API key to config for future use?',
          default: false,
        },
      ]);
      
      if (saveToConfig) {
        cfg.openrouter = cfg.openrouter || {};
        cfg.openrouter.apiKey = globalApiKey;
        saveConfig(cfg);
        console.log(pc.green('✓ API key saved to config'));
      }
      
      console.log(pc.green('✓ API key cached for this session'));
      return globalApiKey;
      
    } catch (error) {
      throw new Error('Failed to get API key: ' + error.message);
    }
  }

  throw new Error('API key is required. Please set OPENROUTER_API_KEY environment variable or configure it.');
}

// Clear cached API key (for testing or session reset)
function clearApiKey() {
  globalApiKey = null;
  apiKeyPrompted = false;
}

// Check if API key is available
function hasApiKey() {
  return !!globalApiKey || !!process.env.OPENROUTER_API_KEY || !!process.env.OPENROUTER_KEY || !!loadConfig()?.openrouter?.apiKey;
}

// Get API key status
function getApiKeyStatus() {
  return {
    hasKey: hasApiKey(),
    isCached: !!globalApiKey,
    fromEnv: !!(process.env.OPENROUTER_API_KEY || process.env.OPENROUTER_KEY),
    fromConfig: !!loadConfig()?.openrouter?.apiKey,
    wasPrompted: apiKeyPrompted
  };
}

module.exports = {
  getApiKey,
  clearApiKey,
  hasApiKey,
  getApiKeyStatus,
  loadConfig,
  saveConfig
};