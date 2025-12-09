# Mind 🧠 - Dr. Zarak | ADHD & Mental Health AI Coach

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-Realtime%20API-412991?logo=openai)](https://platform.openai.com/docs/guides/realtime)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Meet **Dr. Zarak** - Your personal AI mental health companion specializing in ADHD, anxiety, and life coaching. Powered by OpenAI's Realtime API for natural, empathetic voice conversations with evidence-based therapeutic support.

> **⚡ Quick Start**: [Get running in 5 minutes →](QUICKSTART.md)

## Features

- 🎤 **Real-time Voice Interaction**: Natural conversation with low-latency audio using OpenAI's Realtime API
- 🧠 **Dr. Zarak AI Therapist**: Specialized persona with ADHD expertise and personalized therapeutic approach
- 💙 **ADHD-Focused Support**: Evidence-based strategies for executive function, time management, RSD, and more
- 📊 **Mood Tracking**: Track and share your emotional state
- 💡 **Fun Facts & Quick Tips**: Engaging neuroscience insights and immediately actionable strategies
- 🛡️ **Crisis Resources**: Immediate access to crisis helplines and ADHD support organizations
- 🧘 **Coping Techniques**: Built-in grounding exercises, Pomodoro technique, and breathing methods
- 🔒 **Privacy-Focused**: Your conversations are private and secure

## Getting Started

### Prerequisites

- Node.js 18+ 
- An OpenAI API key with access to the Realtime API

### Installation

1. Clone the repository:
```bash
git clone https://github.com/drzarak/mind.git
cd mind
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.sample .env
```

Edit `.env` and add your OpenAI API key:
```
OPENAI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/drzarak/mind)

1. Click the button above or go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Add your `OPENAI_API_KEY` as an environment variable
4. Deploy!

Vercel will automatically detect the Next.js configuration and deploy your app.

## Usage

1. **Connect**: Click the "Connect" button to start a session
2. **Talk**: Use voice (with auto-detection) or push-to-talk to communicate
3. **Track Mood**: Select your current mood and intensity
4. **Get Support**: Receive empathetic guidance and coping strategies
5. **Access Resources**: View crisis helplines and quick techniques anytime

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI Realtime API (gpt-4o-realtime-preview)
- **Audio**: WebRTC for real-time audio streaming
- **Deployment**: Vercel

## Architecture

The app uses OpenAI's Realtime API with WebRTC for low-latency voice interactions:

1. **Session Creation**: API route creates an ephemeral session token
2. **WebRTC Connection**: Client establishes peer connection with OpenAI
3. **Audio Streaming**: Bidirectional audio via WebRTC tracks
4. **Event Handling**: Data channel for conversation events and responses
5. **Agent Configuration**: Custom mental health coach agent with specialized instructions

## Safety & Disclaimer

⚠️ **Important**: Mind is an AI companion for support and guidance. It is **NOT** a substitute for professional mental health care.

- This app does not provide medical advice, diagnosis, or treatment
- In case of emergency, contact emergency services (911) or crisis helplines
- For ongoing mental health concerns, please consult a licensed professional

### Crisis Resources

- **National Suicide Prevention Lifeline**: 988 or 1-800-273-8255
- **Crisis Text Line**: Text HOME to 741741
- **International**: [Find a Helpline](https://findahelpline.com)

## Development

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Lint
npm run lint
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Acknowledgments

- Built with [OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime)
- Inspired by the [OpenAI Realtime Agents](https://github.com/openai/openai-realtime-agents) example
- Mental health resources from [NAMI](https://nami.org) and [SAMHSA](https://samhsa.gov)