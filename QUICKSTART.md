# Quick Start Guide - Mind

Get up and running with Mind in 5 minutes!

## Prerequisites

- Node.js 18 or higher
- An OpenAI API key ([Get one here](https://platform.openai.com/api-keys))
- Access to OpenAI Realtime API (may require API tier upgrade)

## Installation Steps

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/drzarak/mind.git
cd mind

# Install dependencies
npm install
```

### 2. Configure Environment

```bash
# Copy the sample environment file
cp .env.sample .env

# Edit .env and add your OpenAI API key
# OPENAI_API_KEY=sk-your-key-here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Test the Application

1. **Allow Microphone Access**: Your browser will request permission
2. **Click Connect**: Wait for the WebRTC connection to establish
3. **Start Talking**: Either use Push-to-Talk or enable Voice Activity Detection
4. **Have a Conversation**: The AI coach will respond with empathy and guidance

## Common Issues

### "Failed to connect" Error
- Check your API key is correct
- Verify your OpenAI account has Realtime API access
- Check browser console for detailed errors

### No Audio Output
- Check browser permissions for microphone
- Ensure you're using HTTPS (required for microphone access)
- Try a different browser (Chrome/Edge recommended)

### Build Fails
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Deploy to Vercel

### One-Click Deploy

1. Fork this repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your forked repository
5. Add `OPENAI_API_KEY` environment variable
6. Click Deploy

Your app will be live in ~2 minutes!

## Next Steps

- Read the [full documentation](README.md)
- Review [deployment options](DEPLOYMENT.md)
- Understand [contributing guidelines](CONTRIBUTING.md)
- Check the [security policy](SECURITY.md)

## Getting Help

- Check the [Issues page](https://github.com/drzarak/mind/issues)
- Review OpenAI [Realtime API docs](https://platform.openai.com/docs/guides/realtime)
- Check browser console for errors

## Important Reminders

⚠️ **This is not a replacement for professional mental health care**

- In crisis? Call 988 or your local emergency number
- For ongoing mental health needs, consult a licensed professional
- This AI provides support and guidance, not therapy or medical advice

## API Usage & Costs

- Realtime API has per-minute charges
- Monitor your usage in the [OpenAI Dashboard](https://platform.openai.com/usage)
- Consider implementing usage limits for production

---

**Ready to help others?** Star the repo and share with those who might benefit! ⭐
