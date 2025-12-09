# Deployment Guide for Mind

## Deploying to Vercel (Recommended)

Vercel is the recommended platform for deploying Mind as it's optimized for Next.js applications.

### Prerequisites
- A GitHub account
- A Vercel account (free tier is sufficient)
- An OpenAI API key with Realtime API access

### Step-by-Step Deployment

1. **Prepare Your Repository**
   - Ensure all code is pushed to your GitHub repository
   - The app is already configured for Vercel in `vercel.json`

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js app

3. **Configure Environment Variables**
   - In the Vercel project settings, go to "Environment Variables"
   - Add the following variable:
     - Name: `OPENAI_API_KEY`
     - Value: Your OpenAI API key
     - Environment: Production (and optionally Preview and Development)

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your app
   - You'll receive a URL like `https://your-app.vercel.app`

5. **Custom Domain (Optional)**
   - In Vercel project settings, go to "Domains"
   - Add your custom domain and follow DNS configuration instructions

### Deployment Verification

After deployment, verify:
1. The app loads correctly
2. The "Connect" button works
3. Audio permissions are requested
4. Real-time voice interaction functions properly

### Environment Variables Reference

```bash
# Required
OPENAI_API_KEY=sk-...  # Your OpenAI API key with Realtime API access
```

## Deploying to Other Platforms

### Netlify

1. Create a `netlify.toml` file:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

2. Connect your repository to Netlify
3. Add `OPENAI_API_KEY` environment variable
4. Deploy

### AWS Amplify

1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Base directory: (leave empty)
   - Build output directory: `.next`
3. Add `OPENAI_API_KEY` environment variable
4. Deploy

### Docker

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t mind .
docker run -p 3000:3000 -e OPENAI_API_KEY=your_key mind
```

## Troubleshooting

### Build Fails
- Ensure all dependencies are installed: `npm install`
- Check Node.js version (18+ required)
- Verify no TypeScript errors: `npm run build`

### Audio Not Working
- Check browser console for errors
- Ensure HTTPS is being used (required for microphone access)
- Verify OpenAI API key has Realtime API access
- Check browser microphone permissions

### API Errors
- Verify `OPENAI_API_KEY` is set correctly
- Check OpenAI API status
- Ensure your API key has sufficient credits
- Check browser console and server logs

## Performance Optimization

1. **Enable Edge Runtime** (already configured)
2. **Use Environment Variables** for sensitive data
3. **Monitor Usage** through OpenAI dashboard
4. **Set up Analytics** in Vercel

## Security Considerations

1. Never commit `.env` file with real API keys
2. Use Vercel environment variables for secrets
3. Monitor API usage to prevent abuse
4. Consider adding rate limiting for production
5. Keep dependencies updated

## Monitoring

- Use Vercel Analytics for performance monitoring
- Monitor OpenAI API usage in OpenAI dashboard
- Set up error tracking (e.g., Sentry)

## Support

For issues:
1. Check the GitHub repository issues
2. Review OpenAI Realtime API documentation
3. Check Vercel deployment logs
