# Security Policy

## Reporting Security Vulnerabilities

We take security seriously, especially given the sensitive nature of mental health support. If you discover a security vulnerability, please report it responsibly.

### How to Report

**DO NOT** create a public GitHub issue for security vulnerabilities.

Instead:
1. Email the maintainers directly
2. Include a detailed description of the vulnerability
3. Provide steps to reproduce if possible
4. Suggest a fix if you have one

### What to Report

Please report:
- Authentication or authorization issues
- Data exposure vulnerabilities
- API key leakage
- XSS or injection vulnerabilities
- Privacy concerns
- Any security issue that could affect users

### Response Timeline

- Initial response: Within 48 hours
- Status update: Within 7 days
- Fix deployment: As soon as possible depending on severity

## Security Best Practices

When using Mind:

1. **API Keys**
   - Never commit API keys to version control
   - Use environment variables for all secrets
   - Rotate keys regularly
   - Monitor API usage for anomalies

2. **Deployment**
   - Always use HTTPS in production
   - Keep dependencies updated
   - Use secure environment variable storage
   - Enable CORS properly

3. **Data Privacy**
   - No conversation data is stored by default
   - Audio streams are ephemeral
   - OpenAI's data usage policies apply
   - Review OpenAI's privacy policy

4. **Browser Security**
   - Microphone access requires user permission
   - WebRTC connections are encrypted
   - No third-party trackers by default

## Known Limitations

1. This is an AI tool, not a replacement for professional care
2. Conversations may be used by OpenAI per their policies
3. Real-time audio requires modern browser support
4. Crisis situations require immediate professional help

## Dependencies

We rely on:
- OpenAI Realtime API
- Next.js framework
- Various npm packages

We monitor security advisories and update dependencies regularly.

## Updates

Security updates will be:
1. Released as soon as possible
2. Documented in release notes
3. Communicated to users if action is required

## Questions?

For security questions that aren't vulnerabilities, please open a regular GitHub issue or discussion.

Thank you for helping keep Mind secure and safe for all users! 🔒
