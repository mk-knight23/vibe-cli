# VIbe CLI v1.0.5

A powerful command-line interface for AI-assisted coding with OpenRouter integration, featuring specialized tools for code generation, debugging, refactoring, and more.

## 🚀 What's New in v1.0.5

- **Enhanced AI Agent System**: Improved agent capabilities with better context management
- **Specialized Developer Tools**:
  - `codegen` - AI-powered code generation
  - `debug` - Intelligent debugging assistance
  - `refactor` - Smart code refactoring
  - `testgen` - Automated test generation
  - `gittools` - Git workflow automation
  - `multiedit` - Batch file editing capabilities
- **Improved OpenRouter Integration**: Better model selection and API management
- **Enhanced API Key Management**: Secure storage and configuration
- **GitHub Actions Workflow**: Automated build and publish pipeline

## 📦 Installation

### Quick Install (Recommended)

#### macOS/Linux
```bash
# Auto-detect latest version
curl -fsSL https://raw.githubusercontent.com/mk-knight23/vibe-cli/main/install.sh | bash

# Or install specific version
VERSION=v1.0.5 curl -fsSL https://raw.githubusercontent.com/mk-knight23/vibe-cli/main/install.sh | bash
```

#### Windows
Download the latest Release asset `vibe-win-x64.exe` from [releases](https://github.com/mk-knight23/vibe-cli/releases), add to PATH as `vibe`

### Install via npm

```bash
# Global install
npm install -g vibe-cli

# Or install from GitHub
npm i -g github:mk-knight23/vibe-cli#v1.0.5

# One-off run without installation
npx vibe-cli
```

## 🎯 Quick Start

### 1. Configure API Key
```bash
# Set OpenRouter API key
vibe config set openrouter.apiKey sk-or-...

# Or use environment variable
export OPENROUTER_API_KEY="sk-or-..."
```

### 2. Start Chatting
```bash
# Start interactive chat
vibe chat "Hello, help me code!"

# Use specific model
vibe model use tng/deepseek-r1t2-chimera:free
```

## 📋 Core Commands

### Basic Usage
```bash
vibe                    # Start interactive chat
vibe chat "message"     # Send direct message
vibe help              # Show all commands
```

### AI Agent Tools
```bash
vibe agent start       # Start AI agent mode
vibe codegen          # Generate code from descriptions
vibe debug            # Debug assistance
vibe refactor         # Refactor existing code
vibe testgen          # Generate tests
vibe gittools         # Git workflow automation
```

### Model Management
```bash
vibe model list        # List available models
vibe model use <name>  # Switch to specific model
vibe cost             # Show usage costs
```

### Development Commands
```bash
vibe plan "feature"    # Plan implementation
vibe fix              # Auto-fix issues
vibe test             # Run tests
vibe run --yolo       # Execute with auto-approval
```

### Configuration
```bash
vibe config set <key> <value>  # Set configuration
vibe theme set light           # Change theme
vibe resume                    # Resume last session
```

## 🛠️ Advanced Features

### File Operations
- Read, write, edit, append, move, and delete files
- Glob pattern support with size caps
- Batch editing capabilities

### Web Search Integration
- DuckDuckGo Instant Answer integration
- OpenRouter documentation snippets
- Context-aware search results

### Shell Command Execution
- Run shell commands and inject output
- Interactive command support
- Background process management

### Session Management
- Auto-save transcripts to `transcripts/`
- Resume previous sessions
- Cost tracking per session

## 🔧 Development

### Local Development
```bash
# Clone repository
git clone https://github.com/mk-knight23/vibe-cli.git
cd vibe-cli

# Install dependencies
npm install

# Link for local testing
npm link

# Run locally
vibe
```

### Building & Testing
```bash
# Run smoke tests
npm run smoke

# Build package
npm pack

# Build binaries
npm run build:bin
```

## 📝 Configuration Files

- API keys: `~/.vibe/config.json`
- Themes: `themes/dark.json`, `themes/light.json`
- Sessions: `sessions/`
- Transcripts: `transcripts/`

## 🐛 Troubleshooting

### Common Issues

1. **Node.js Version**: Ensure Node.js v18+ is installed
   ```bash
   node --version  # Should be v18.0.0 or higher
   ```

2. **Installation Errors**: 
   ```bash
   # Clean install
   npm uninstall -g vibe-cli
   rm -rf $(npm root -g)/vibe-cli
   npm i -g vibe-cli
   ```

3. **API Key Issues**:
   - Verify key format: `sk-or-...`
   - Check environment variable: `echo $OPENROUTER_API_KEY`

4. **Rate Limiting**: The CLI automatically rotates through free models

## 📄 Environment Variables

- `OPENROUTER_API_KEY` - Your OpenRouter API key
- `VIBE_NO_BANNER=1` - Disable startup banner
- `EDITOR` - Preferred text editor for multi-line input

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open Pull Request

## 📜 License

MIT License - see [LICENSE](LICENSE) file

## 🔗 Links

- **Repository**: [https://github.com/mk-knight23/vibe-cli](https://github.com/mk-knight23/vibe-cli)
- **Issues**: [https://github.com/mk-knight23/vibe-cli/issues](https://github.com/mk-knight23/vibe-cli/issues)
- **NPM Package**: [https://www.npmjs.com/package/vibe-cli](https://www.npmjs.com/package/vibe-cli)
- **Author**: mk-knight23

## 📊 System Requirements

- Node.js v18.0.0 or higher
- npm v8.0.0 or higher
- 100MB free disk space
- Internet connection for AI model access

---

**Note**: This CLI uses only free OpenRouter models. Rate limits apply and the system automatically rotates through available models to maximize usage.
