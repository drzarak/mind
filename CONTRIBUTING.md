# Contributing to Mind

Thank you for your interest in contributing to Mind! This mental health companion app aims to provide empathetic support and guidance to users through AI-powered conversations.

## Code of Conduct

Given the sensitive nature of mental health support:

1. **Be Respectful**: Treat all users' mental health concerns with respect and empathy
2. **Be Responsible**: Recognize the potential impact of this app on vulnerable users
3. **Be Professional**: Maintain high standards in code quality and testing
4. **Prioritize Safety**: Always consider user safety in all contributions

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported
2. Include detailed steps to reproduce
3. Specify your environment (browser, OS, etc.)
4. Include console errors or logs

### Suggesting Features

1. Check existing issues for similar suggestions
2. Explain the use case and benefits
3. Consider privacy and safety implications
4. Provide examples if possible

### Code Contributions

#### Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/mind.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`

#### Development Guidelines

1. **Code Style**
   - Follow the existing TypeScript/React patterns
   - Use meaningful variable and function names
   - Add comments for complex logic
   - Run `npm run lint` before committing

2. **Testing**
   - Test all changes thoroughly
   - Include manual testing for UI changes
   - Verify audio functionality works

3. **Mental Health Content**
   - Consult with mental health professionals when modifying agent instructions
   - Never remove or weaken crisis intervention features
   - Maintain empathetic and supportive tone
   - Include appropriate disclaimers

4. **Security**
   - Never commit API keys or secrets
   - Validate all user inputs
   - Follow security best practices
   - Be mindful of privacy concerns

#### Pull Request Process

1. Update documentation for any feature changes
2. Ensure the app builds successfully: `npm run build`
3. Write a clear PR description explaining:
   - What changes were made
   - Why they were necessary
   - How they were tested
4. Reference any related issues
5. Wait for review and address feedback

### Areas Needing Contribution

1. **UI/UX Improvements**
   - Accessibility enhancements
   - Mobile responsiveness
   - Visual design improvements

2. **Features**
   - Additional coping techniques
   - Journal functionality
   - Progress tracking
   - Multi-language support

3. **Documentation**
   - User guides
   - API documentation
   - Deployment guides

4. **Testing**
   - Unit tests
   - Integration tests
   - Accessibility testing

## Mental Health Content Guidelines

When contributing to mental health-related content:

1. **Evidence-Based**: Use techniques backed by psychological research
2. **Non-Diagnostic**: Never suggest diagnoses
3. **Empathetic**: Maintain warm, supportive language
4. **Professional Boundaries**: Clearly distinguish AI support from professional therapy
5. **Crisis Resources**: Always make crisis resources easily accessible

## Project Structure

```
mind/
├── app/
│   ├── api/           # API routes
│   ├── components/    # React components
│   ├── lib/          # Utility functions
│   ├── agentConfigs/ # AI agent configurations
│   └── types.ts      # TypeScript types
├── public/           # Static assets
└── ...config files
```

## Questions?

- Open an issue for questions
- Check existing documentation
- Review the OpenAI Realtime API docs

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for helping make Mind a better resource for mental health support! 💙
